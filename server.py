"""
Локальный сервер для Telegram Analytics.

  * раздаёт статические файлы (index.html, main.js, style.css);
  * проксирует запросы к ИИ (OpenAI-совместимый API: Groq, OpenAI, OpenRouter, LM Studio...).

Запуск:  python server.py   →   http://localhost:8000

API-ключ по умолчанию берётся из переменной окружения GROQ_API_KEY или из файла .env
рядом со скриптом (строка GROQ_API_KEY=gsk_...). Ключ, указанный в настройках
в браузере, имеет приоритет.
"""

import http.server
import json
import os
import socketserver
import sys
import urllib.error
import urllib.parse
import urllib.request

PORT = int(os.environ.get("PORT", "8000"))
HOST = os.environ.get("HOST", "127.0.0.1")
DEFAULT_API_BASE = "https://api.groq.com/openai/v1"
DEFAULT_MODEL = "llama-3.3-70b-versatile"
MAX_BODY = 2 * 1024 * 1024  # 2 MB
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

# Консоль Windows (cp1251) падает на эмодзи и редких символах — заменяем их, а не роняем сервер
for _stream in (sys.stdout, sys.stderr):
    try:
        _stream.reconfigure(errors="replace")
    except (AttributeError, ValueError):
        pass


def load_env_file(path):
    if not os.path.isfile(path):
        return
    with open(path, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


load_env_file(os.path.join(SCRIPT_DIR, ".env"))
SERVER_API_KEY = os.environ.get("GROQ_API_KEY", "").strip()


def mask(key):
    return f"{key[:6]}...{key[-4:]}" if len(key) > 12 else "—"


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=SCRIPT_DIR, **kwargs)

    def end_headers(self):
        # Не даём браузеру кешировать старые версии скриптов во время разработки
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def send_json(self, status, payload):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path == "/api/status":
            return self.send_json(200, {"serverKey": bool(SERVER_API_KEY)})
        return super().do_GET()

    def send_head(self):
        # Не раздаём служебные файлы (.env с ключом, сам сервер и т.п.)
        name = os.path.basename(self.translate_path(self.path))
        if name.startswith(".") or name.endswith(".py"):
            self.send_error(404, "File not found")
            return None
        return super().send_head()

    def do_POST(self):
        if self.path != "/api/chat":
            return self.send_json(404, {"error": "not found"})

        # Простая защита от CSRF: запросы принимаются только со своей же страницы
        origin = self.headers.get("Origin")
        host = self.headers.get("Host", "")
        if origin and urllib.parse.urlparse(origin).netloc != host:
            return self.send_json(403, {"error": "Запрос с чужого сайта отклонён"})

        try:
            length = int(self.headers.get("Content-Length") or 0)
        except ValueError:
            length = 0
        if length <= 0 or length > MAX_BODY:
            return self.send_json(400, {"error": "Пустой или слишком большой запрос"})

        try:
            data = json.loads(self.rfile.read(length).decode("utf-8"))
        except (ValueError, UnicodeDecodeError):
            return self.send_json(400, {"error": "Некорректный JSON"})

        api_base = (data.get("api_base") or DEFAULT_API_BASE).strip().rstrip("/")
        parsed = urllib.parse.urlparse(api_base)
        if parsed.scheme not in ("http", "https") or not parsed.netloc:
            return self.send_json(400, {"error": "Некорректный адрес API"})

        client_key = (data.get("api_key") or "").strip()
        api_key = client_key
        if not api_key:
            # Серверный ключ отправляем только на официальный адрес Groq,
            # чтобы его нельзя было «увести» на сторонний сервер.
            if parsed.netloc == urllib.parse.urlparse(DEFAULT_API_BASE).netloc and SERVER_API_KEY:
                api_key = SERVER_API_KEY
        if not api_key and parsed.hostname not in ("localhost", "127.0.0.1"):
            return self.send_json(401, {"error": "Не указан API-ключ. Откройте настройки ИИ (⚙)."})

        req_body = {
            "model": data.get("model") or DEFAULT_MODEL,
            "messages": data.get("messages") or [],
            "temperature": 0.7,
        }
        # Cloudflare перед api.groq.com блокирует стандартный User-Agent "Python-urllib" (error 1010)
        headers = {"Content-Type": "application/json", "User-Agent": "TelegramAnalytics/2.0"}
        if api_key:
            headers["Authorization"] = f"Bearer {api_key}"

        target = f"{api_base}/chat/completions"
        print(f"[ai] {req_body['model']} -> {target} (key {mask(api_key)})", flush=True)

        req = urllib.request.Request(
            target, data=json.dumps(req_body).encode("utf-8"), headers=headers, method="POST"
        )
        try:
            with urllib.request.urlopen(req, timeout=120) as resp:
                body = resp.read()
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)
        except urllib.error.HTTPError as e:
            raw = e.read().decode("utf-8", errors="replace")
            print(f"[ai] HTTP {e.code}: {raw[:500]}", flush=True)
            message = raw
            try:
                parsed_err = json.loads(raw)
                err = parsed_err.get("error", parsed_err)
                message = err.get("message", raw) if isinstance(err, dict) else str(err)
            except ValueError:
                pass
            self.send_json(e.code, {"error": message[:1000]})
        except Exception as e:  # сеть, таймаут и т.п.
            print(f"[ai] error: {e}", flush=True)
            self.send_json(502, {"error": f"Не удалось связаться с API: {e}"})

    def log_message(self, fmt, *args):
        # Логируем только API-запросы, чтобы не засорять консоль статикой
        if args and "/api/" in str(args[0]):
            super().log_message(fmt, *args)


class Server(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True


if __name__ == "__main__":
    with Server((HOST, PORT), Handler) as httpd:
        print(f"Telegram Analytics: http://localhost:{PORT}")
        print(f"Серверный API-ключ: {'задан (' + mask(SERVER_API_KEY) + ')' if SERVER_API_KEY else 'не задан'}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass
