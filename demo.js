// Генератор демо-чата в формате экспорта Telegram Desktop (result.json).
// Данные полностью вымышленные и детерминированные (одинаковые при каждом запуске).
// Demo chat generator in the Telegram Desktop export format. Fully synthetic and deterministic.
window.TGA_DEMO = function (lang) {
    'use strict';
    let seed = 20240214;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const pick = (a) => a[Math.floor(rnd() * a.length)];

    const L = lang === 'en' ? {
        chat: 'Alice & Bob (demo)',
        users: [['Alice', 'user1001'], ['Bob', 'user1002']],
        phrases: [
            'hey how are you', 'want to grab dinner tonight?', 'look at this meme 😂😂', 'just got home',
            'work again tomorrow', 'can you buy some bread please', 'love you ❤️', 'movie on saturday?',
            'hahaha 🤣', 'the cat broke a cup again 🐱', 'the weather is amazing today ☀️',
            'send me the trip photos', 'let us order pizza 🍕', 'I have a call in an hour', 'good morning ☀️',
            'good night 😴', 'coffee? ☕', 'running late, 10 min', 'miss you', 'how was your day?',
            'the new episode is out 🔥', 'did you feed the cat?', 'see you soon', 'I am so tired today',
        ],
        link: ['look ', { type: 'link', text: 'https://example.com/recipe' }, ' — ', { type: 'bold', text: 'this' }, ' looks delicious'],
        poll: 'Where shall we go on holiday?',
        fwd: 'Travel channel',
        file: 'tickets.pdf',
    } : {
        chat: 'Аня и Дима (демо)',
        users: [['Аня', 'user1001'], ['Дима', 'user1002']],
        phrases: [
            'привет как дела', 'пойдём ужинать вечером?', 'смотри какой мем 😂😂', 'я уже дома',
            'завтра опять работа', 'купи хлеба пожалуйста', 'люблю тебя ❤️', 'кино в субботу?',
            'ахахах 🤣', 'кот опять разбил чашку 🐱', 'погода сегодня отличная ☀️',
            'скинь фотки с поездки', 'давай закажем пиццу 🍕', 'у меня созвон через час', 'доброе утро ☀️',
            'спокойной ночи 😴', 'кофе? ☕', 'опаздываю на 10 минут', 'скучаю', 'как прошёл день?',
            'вышла новая серия 🔥', 'ты покормил кота?', 'скоро буду', 'я сегодня так устала',
        ],
        link: ['смотри ', { type: 'link', text: 'https://example.com/recipe' }, ' — ', { type: 'bold', text: 'очень' }, ' вкусно выглядит'],
        poll: 'Куда поедем в отпуск?',
        fwd: 'Канал о путешествиях',
        file: 'билеты.pdf',
    };

    const pad = (n) => String(n).padStart(2, '0');
    const iso = (ms) => {
        const d = new Date(ms);
        return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}T${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`;
    };

    const messages = [];
    let id = 1;
    const start = Date.UTC(2023, 2, 1);
    const days = 1025;
    for (let d = 0; d < days; d++) {
        const dayMs = start + d * 86400000;
        const wd = new Date(dayMs).getUTCDay();
        const season = 1 + 0.6 * Math.sin(d / 58) + 0.3 * Math.sin(d / 170);
        let n = Math.floor(rnd() * (wd === 0 || wd === 6 ? 70 : 38) * season);
        if (rnd() < 0.08) n = 0;
        // Часы: утро, обед и пик вечером
        const times = Array.from({ length: n }, () => {
            const r = rnd();
            const h = r < 0.2 ? 7 + rnd() * 3 : r < 0.45 ? 12 + rnd() * 3 : r < 0.95 ? 18 + rnd() * 5.5 : rnd() * 3;
            return Math.floor(h * 3600);
        }).sort((a, b) => a - b);
        let prevAuthor = 0;
        for (const t of times) {
            const u = rnd() < 0.62 ? 1 - prevAuthor : prevAuthor;
            prevAuthor = u;
            const [name, fromId] = L.users[u];
            const ms = dayMs + t * 1000;
            const date = iso(ms);
            const m = {
                id: id++, type: 'message', date, date_unixtime: String(Math.floor(ms / 1000)),
                from: name, from_id: fromId, text: '', text_entities: [],
            };
            const r = rnd();
            if (r < 0.17) { m.file = 'stickers/sticker.webp'; m.media_type = 'sticker'; m.sticker_emoji = pick(['😂', '❤️', '👍', '😭', '🔥', '🥰']); }
            else if (r < 0.21) { m.photo = '(File not included. Change data exporting settings to download.)'; m.text = rnd() < 0.4 ? pick(L.phrases) : ''; }
            else if (r < 0.245) { m.media_type = 'voice_message'; m.duration_seconds = 3 + Math.floor(rnd() * 70); }
            else if (r < 0.255) { m.media_type = 'video_message'; m.duration_seconds = 5 + Math.floor(rnd() * 50); }
            else if (r < 0.265) { m.media_type = 'animation'; }
            else if (r < 0.27) { m.file = 'files/doc'; m.file_name = L.file; }
            else if (r < 0.272) { m.poll = { question: L.poll, answers: [] }; }
            else if (r < 0.29) { m.text = L.link; }
            else { m.text = pick(L.phrases); }
            if (rnd() < 0.08 && id > 4) m.reply_to_message_id = id - 2 - Math.floor(rnd() * 3);
            if (rnd() < 0.015) m.forwarded_from = L.fwd;
            if (rnd() < 0.03) m.edited = date;
            if (d > 300 && rnd() < 0.14) {
                const other = L.users[fromId === L.users[0][1] ? 1 : 0];
                m.reactions = [{ type: 'emoji', count: 1, emoji: pick(['❤', '❤', '❤', '👍', '😁', '🔥', '🥰']), recent: [{ from: other[0], from_id: other[1], date }] }];
                if (rnd() < 0.15) m.reactions.push({ type: 'emoji', count: 1, emoji: '😁', recent: [{ from: other[0], from_id: other[1], date }] });
            }
            messages.push(m);
        }
    }
    return { name: L.chat, type: 'personal_chat', id: 777000, messages };
};
