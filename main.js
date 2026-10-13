(() => {
    'use strict';

    // ================================================================
    // Локализация / i18n
    // ================================================================
    const I18N = {
        ru: {
            'nav.openAnother': 'Другой файл',
            'nav.theme': 'Сменить тему',
            'nav.lang': 'Switch to English',
            'nav.langCode': 'RU',
            'hero.title': 'Статистика вашего<br><span class="gradient-text">Telegram-чата</span>',
            'hero.sub': 'Графики активности, тренды слов, реакции, итоги года, просмотр переписки и ИИ-аналитик. Файл обрабатывается прямо в браузере и никуда не загружается.',
            'drop.title': 'Перетащите сюда <code>result.json</code>',
            'drop.hint': 'или <strong>нажмите, чтобы выбрать файл</strong>',
            'drop.aria': 'Выбрать файл экспорта',
            'landing.demo': 'Попробовать на демо-данных',
            'err.demo': 'Не удалось загрузить демо-данные',
            'howto.1': '<b>Telegram Desktop</b> → откройте нужный чат → меню <b>⋮</b> → <b>Экспорт истории чата</b>.',
            'howto.2': 'Снимите галочки с фото и видео (они не нужны) и выберите формат <b>JSON</b> (машиночитаемый).',
            'howto.3': 'Перетащите получившийся <code>result.json</code> сюда. Подходит и полный экспорт аккаунта — можно будет выбрать чат.',
            'picker.title': 'Выберите чат',
            'picker.search': 'Поиск чата...',
            'picker.count': '{n} в экспорте',
            'picker.none': 'Ничего не найдено',
            'loading.read': 'Читаем {name} ({size})...',
            'loading.parse': 'Разбираем JSON...',
            'loading.analyze': 'Считаем статистику: {n}...',
            'size.mb': '{n} МБ',
            'size.kb': '{n} КБ',
            'err.notJson': 'Нужен файл .json — экспорт истории Telegram в формате JSON.',
            'err.broken': 'Файл повреждён или это не JSON: {msg}',
            'err.read': 'Не удалось прочитать файл: {msg}',
            'err.noMessages': 'В файле не найдены сообщения. Убедитесь, что это JSON-экспорт из Telegram Desktop.',
            'err.analyze': 'Ошибка при анализе чата: {msg}',
            'err.emptyChat': 'В этом чате нет сообщений.',
            'drag.overlay': 'Отпустите файл, чтобы открыть',
            'footer.privacy': 'Данные не покидают ваш браузер.',
            'untitled': 'Без названия',
            'saved': 'Избранное',
            'deleted': 'Удалённый аккаунт',
            'chat': 'Чат',
            'kpi.messages': 'Сообщений',
            'kpi.perDay': '≈ {n} в день',
            'kpi.stickers': 'Стикеров',
            'kpi.ofAll': '{n}% от всех',
            'kpi.users': 'Участников',
            'kpi.period': 'Период',
            'kpi.since': 'с {date}',
            'kpi.activeDays': 'Активных дней',
            'kpi.activeOf': '{p}% из {n}',
            'kpi.record': 'Рекорд за день',
            'kpi.streak': 'Самая длинная серия',
            'kpi.until': 'по {date}',
            'kpi.voice': 'Голосовых',
            'kpi.voiceTotal': '{d} в сумме',
            'kpi.reactions': 'Реакций',
            'kpi.reactionsSub': 'чаще всего {e}',
            'kpi.openDay': 'Открыть сообщения за этот день',
            'activity.title': 'Активность',
            'activity.sub': 'Нажмите на график, чтобы открыть сообщения за этот период',
            'series.messages': 'Сообщения',
            'series.stickers': 'Стикеры',
            'gran.day': 'Дни',
            'gran.week': 'Недели',
            'gran.month': 'Месяцы',
            'tt.more': 'и ещё {n}',
            'tt.click': 'Нажмите, чтобы открыть сообщения',
            'trend.title': 'Тренд слова',
            'trend.sub': 'Как часто слово встречалось в переписке. До 4 слов через запятую; * в конце — любые окончания (люб*)',
            'trend.placeholder': 'например: привет, люблю, работ*',
            'trend.show': 'Показать',
            'trend.empty': 'Введите слово, чтобы построить график',
            'trend.zero': 'Эти слова в чате не встречаются',
            'trend.notFound': 'не встречается',
            'trend.first': 'впервые: {date} — {name}',
            'trend.try': 'Попробуйте:',
            'trend.wordTitle': 'Нажмите, чтобы построить тренд',
            'years.title': 'По годам',
            'years.vs': 'По сравнению с {y}',
            'years.top': 'Активнее всех: {name}',
            'years.stk': '{n} стик.',
            'rhythm.title': 'Ритм общения',
            'rhythm.sub': 'Пик: {day}, около {h}:00. Самый активный день недели: {wd}. Ночью (0–6 ч) — {p}% сообщений.',
            'heat.less': 'меньше',
            'heat.more': 'больше',
            'users.title': 'Участники',
            'users.more': 'Показать всех ({n})',
            'users.less': 'Свернуть',
            'users.share': '#{rank} · {p}% всех сообщений · с {date}',
            'users.total': 'всего',
            'users.stack': 'Сообщения: {m}, стикеры: {s}',
            'chip.msgs': 'сообщ.:',
            'chip.stk': 'стикеров:',
            'chip.len': '≈ <b>{n}</b> симв.',
            'chip.lenTitle': 'Средняя длина текстового сообщения',
            'chip.media': 'медиа:',
            'chip.days': 'активных дней:',
            'chip.starts': 'начинает разговор:',
            'chip.startsTitle': 'Сколько раз писал(а) первым после паузы больше 6 часов',
            'chip.reply': 'отвечает за <b>{d}</b>',
            'chip.replyTitle': 'Медианное время ответа на чужое сообщение',
            'chip.emojiTitle': 'Любимые эмодзи',
            'chip.reacts': 'реакций получено:',
            'react.title': 'Реакции',
            'react.summary': 'Всего: {r} · сообщений с реакциями: {m}',
            'react.top': 'Популярные реакции',
            'react.people': 'Кто ставит и получает',
            'react.given': 'поставил(а) {n}',
            'react.received': 'получил(а) {n}',
            'react.pairs': 'Кто кому',
            'react.best': 'Самые популярные сообщения',
            'react.none': 'В этом экспорте нет реакций. Telegram добавил их в экспорт в 2024 году — сделайте экспорт заново, если нужна эта статистика.',
            'react.note': 'Telegram сохраняет авторов только последних реакций на сообщение, поэтому «кто кому» — приблизительная оценка.',
            'react.custom': 'кастомные эмодзи',
            'react.paid': 'платные звёзды',
            'words.title': 'Топ слов',
            'words.all': 'Все участники',
            'words.search': 'Поиск слова...',
            'words.more': 'Показать ещё ({n})',
            'words.notFound': 'Такого слова нет',
            'words.none': 'Слов пока нет',
            'emoji.title': 'Эмодзи',
            'emoji.text': 'В тексте',
            'emoji.stickers': 'Стикеры',
            'emoji.noneText': 'Эмодзи в тексте не найдены',
            'emoji.noneStk': 'Стикеров нет',
            'media.title': 'Типы сообщений',
            'kind.text': 'Текст', 'kind.sticker': 'Стикеры', 'kind.photo': 'Фото', 'kind.video': 'Видео',
            'kind.round': 'Кружочки', 'kind.voice': 'Голосовые', 'kind.gif': 'GIF', 'kind.audio': 'Аудио',
            'kind.file': 'Файлы', 'kind.poll': 'Опросы', 'kind.location': 'Геопозиции', 'kind.contact': 'Контакты',
            'm.sticker': 'Стикер', 'm.photo': 'Фото', 'm.video': 'Видео', 'm.round': 'Видеосообщение',
            'm.voice': 'Голосовое', 'm.gif': 'GIF', 'm.audio': 'Аудио', 'm.file': 'Файл', 'm.poll': 'Опрос',
            'm.location': 'Геопозиция', 'm.contact': 'Контакт', 'm.text': 'Сообщение',
            'wrap.title': 'Итоги года',
            'wrap.sub': 'Карточка в формате сторис — сохраните и отправьте собеседнику',
            'wrap.download': 'Скачать PNG',
            'wrap.copy': 'Копировать',
            'wrap.copied': 'Картинка скопирована в буфер обмена',
            'wrap.copyFail': 'Браузер не разрешил копирование — воспользуйтесь кнопкой «Скачать PNG»',
            'w.messages': 'Сообщений',
            'w.stickers': 'Стикеров',
            'w.andStickers': 'и {n}',
            'w.vs': '{p} к {y}',
            'w.days': 'Дней на связи',
            'w.ofDays': 'из {n}',
            'w.hotDay': 'Самый жаркий день',
            'w.word': 'Слово года',
            'w.emoji': 'Эмодзи года',
            'w.reaction': 'Реакция года',
            'w.peak': 'Любимое время',
            'w.peakSub': 'пик активности',
            'w.month': 'Лучший месяц',
            'w.streak': 'Самая длинная серия',
            'w.streakSub': 'дней подряд',
            'w.voice': 'Голосовые',
            'w.who': 'Кто писал больше',
            'w.leader': 'Лидер года',
            'w.others': 'остальные',
            'w.footer': 'Telegram Analytics',
            'viewer.title': 'Сообщения',
            'viewer.search': 'Поиск по тексту...',
            'viewer.allAuthors': 'Все авторы',
            'viewer.day': 'Этот день',
            'viewer.all': 'Весь чат',
            'viewer.prev': 'Предыдущий день с сообщениями',
            'viewer.next': 'Следующий день с сообщениями',
            'viewer.found': 'Найдено: {n}',
            'viewer.hintAll': 'Введите текст или выберите автора, чтобы искать по всему чату',
            'viewer.noDay': 'В этот день сообщений не было.',
            'viewer.nearest': 'Ближайший день: {date}',
            'viewer.nothing': 'Ничего не найдено',
            'viewer.limited': 'Показаны последние {n} из {total} совпадений. Уточните запрос, чтобы увидеть остальные.',
            'viewer.openDay': 'Открыть весь день',
            'viewer.fwd': '↪ Переслано от {name}',
            'viewer.goto': 'Перейти к сообщению',
            'viewer.edited': 'изм.',
            'viewer.empty': 'Пустое сообщение',
            'dur.sec': '{n} сек', 'dur.min': '{n} мин', 'dur.hm': '{h} ч {m} мин', 'dur.h': '{h} ч', 'dur.d': '{n} дн',
            'ai.name': 'ИИ-аналитик',
            'ai.status': 'Знает статистику вашего чата',
            'ai.typing': 'Печатает...',
            'ai.clear': 'Очистить диалог',
            'ai.settings': 'Настройки API',
            'ai.close': 'Закрыть',
            'ai.settingsTitle': 'Настройки ИИ',
            'ai.settingsDesc': 'Подойдёт любой OpenAI-совместимый API: Groq, OpenAI, OpenRouter, локальный LM Studio / Ollama. Настройки хранятся только в этом браузере.',
            'ai.key': 'API-ключ',
            'ai.keyPh': 'gsk_... (можно не указывать, если ключ задан на сервере)',
            'ai.model': 'Модель',
            'ai.base': 'Адрес API (Base URL)',
            'ai.sample': 'Передавать ИИ последние 150 сообщений переписки (ответы точнее, но текст уйдёт в API)',
            'ai.save': 'Сохранить',
            'ai.cancel': 'Отмена',
            'ai.input': 'Спросите что-нибудь о чате...',
            'ai.send': 'Отправить',
            'ai.noteFile': 'Страница открыта без server.py — запросы пойдут напрямую в API, нужен ключ.',
            'ai.noteServer': 'На сервере задан ключ Groq по умолчанию — поле ключа можно оставить пустым.',
            'ai.noteNoServer': 'Ключ по умолчанию на сервере не задан (файл .env).',
            'ai.hello': 'Привет! Я изучил статистику чата **{chat}**{who}. Спрашивайте что угодно: кто активнее, как менялось общение, кто быстрее отвечает. Можно выбрать готовый вопрос ниже 👇',
            'ai.whoTwo': ' ({a} и {b})',
            'ai.whoMany': ' — {n}',
            'ai.needKey': 'Укажите API-ключ в настройках (⚙) или запустите приложение через server.py.',
            'ai.checkKey': ' — проверьте API-ключ в настройках (⚙).',
            'ai.emptyReply': 'Модель вернула пустой ответ',
            'ai.network': 'Нет связи с сервером или API (проверьте адрес и интернет).',
            'ai.suggestions': [
                'Кто самый активный и почему?',
                'Опиши стиль общения каждого участника',
                'Как менялась активность по годам?',
                'Кто чаще начинает разговор и кто быстрее отвечает?',
                'Составь шуточный гороскоп совместимости',
                'Какие темы, судя по словам, обсуждают чаще всего?',
            ],
            'ai.system': 'Ты — остроумный и внимательный аналитик переписки в Telegram. Ниже — агрегированная статистика чата в JSON.\n\n{json}\n\nОтвечай на русском. Опирайся на цифры из статистики и приводи их, делай выводы о трендах, стиле общения и характерах участников. Можно шутить и составлять шуточные «гороскопы совместимости», но не выдумывай фактов, которых нет в данных: если информации не хватает, так и скажи. Используй Markdown (списки, **жирный**), отвечай по делу, без воды.',
            'ai.sampleHeader': 'Последние сообщения переписки (для понимания тем и тона):',
            chatTypes: {
                personal_chat: 'Личный чат', bot_chat: 'Чат с ботом', private_group: 'Группа',
                private_supergroup: 'Супергруппа', public_supergroup: 'Публичная группа',
                private_channel: 'Канал', public_channel: 'Публичный канал', saved_messages: 'Избранное',
            },
            plurals: {
                message: ['сообщение', 'сообщения', 'сообщений'],
                sticker: ['стикер', 'стикера', 'стикеров'],
                participant: ['участник', 'участника', 'участников'],
                day: ['день', 'дня', 'дней'],
                year: ['год', 'года', 'лет'],
                chat: ['чат', 'чата', 'чатов'],
                entry: ['запись', 'записи', 'записей'],
                reaction: ['реакция', 'реакции', 'реакций'],
                time: ['раз', 'раза', 'раз'],
            },
        },
        en: {
            'nav.openAnother': 'Open another',
            'nav.theme': 'Toggle theme',
            'nav.lang': 'Переключить на русский',
            'nav.langCode': 'EN',
            'hero.title': 'Insights from your<br><span class="gradient-text">Telegram chat</span>',
            'hero.sub': 'Activity charts, word trends, reactions, a yearly recap, a message browser and an AI analyst. The file is processed right in your browser and never uploaded anywhere.',
            'drop.title': 'Drop your <code>result.json</code> here',
            'drop.hint': 'or <strong>click to choose a file</strong>',
            'drop.aria': 'Choose an export file',
            'landing.demo': 'Try it with demo data',
            'err.demo': 'Could not load the demo data',
            'howto.1': '<b>Telegram Desktop</b> → open the chat → <b>⋮</b> menu → <b>Export chat history</b>.',
            'howto.2': 'Untick photos and videos (they are not needed) and choose the <b>JSON</b> (machine-readable) format.',
            'howto.3': 'Drop the resulting <code>result.json</code> here. A full account export works too — you will be able to pick a chat.',
            'picker.title': 'Choose a chat',
            'picker.search': 'Search chats...',
            'picker.count': '{n} in the export',
            'picker.none': 'Nothing found',
            'loading.read': 'Reading {name} ({size})...',
            'loading.parse': 'Parsing JSON...',
            'loading.analyze': 'Crunching numbers: {n}...',
            'size.mb': '{n} MB',
            'size.kb': '{n} KB',
            'err.notJson': 'A .json file is required — a Telegram chat export in JSON format.',
            'err.broken': 'The file is corrupted or not JSON: {msg}',
            'err.read': 'Could not read the file: {msg}',
            'err.noMessages': 'No messages found. Make sure this is a JSON export from Telegram Desktop.',
            'err.analyze': 'Failed to analyze the chat: {msg}',
            'err.emptyChat': 'This chat has no messages.',
            'drag.overlay': 'Drop the file to open it',
            'footer.privacy': 'Your data never leaves your browser.',
            'untitled': 'Untitled',
            'saved': 'Saved Messages',
            'deleted': 'Deleted account',
            'chat': 'Chat',
            'kpi.messages': 'Messages',
            'kpi.perDay': '≈ {n} per day',
            'kpi.stickers': 'Stickers',
            'kpi.ofAll': '{n}% of all',
            'kpi.users': 'Participants',
            'kpi.period': 'Period',
            'kpi.since': 'since {date}',
            'kpi.activeDays': 'Active days',
            'kpi.activeOf': '{p}% of {n}',
            'kpi.record': 'Busiest day',
            'kpi.streak': 'Longest streak',
            'kpi.until': 'ending {date}',
            'kpi.voice': 'Voice messages',
            'kpi.voiceTotal': '{d} in total',
            'kpi.reactions': 'Reactions',
            'kpi.reactionsSub': 'mostly {e}',
            'kpi.openDay': 'Open messages from this day',
            'activity.title': 'Activity',
            'activity.sub': 'Click the chart to open messages from that period',
            'series.messages': 'Messages',
            'series.stickers': 'Stickers',
            'gran.day': 'Days',
            'gran.week': 'Weeks',
            'gran.month': 'Months',
            'tt.more': 'and {n} more',
            'tt.click': 'Click to open messages',
            'trend.title': 'Word trend',
            'trend.sub': 'How often a word was used over time. Up to 4 words separated by commas; a trailing * matches any ending (love*)',
            'trend.placeholder': 'e.g. hello, love, work*',
            'trend.show': 'Show',
            'trend.empty': 'Type a word to build the chart',
            'trend.zero': 'These words never appear in the chat',
            'trend.notFound': 'not found',
            'trend.first': 'first used: {date} — {name}',
            'trend.try': 'Try:',
            'trend.wordTitle': 'Click to see the trend',
            'years.title': 'By year',
            'years.vs': 'Compared to {y}',
            'years.top': 'Most active: {name}',
            'years.stk': '{n} stickers',
            'rhythm.title': 'Rhythm',
            'rhythm.sub': 'Peak: {day} around {h}:00. Busiest weekday: {wd}. At night (0–6 am): {p}% of messages.',
            'heat.less': 'less',
            'heat.more': 'more',
            'users.title': 'Participants',
            'users.more': 'Show all ({n})',
            'users.less': 'Collapse',
            'users.share': '#{rank} · {p}% of all messages · since {date}',
            'users.total': 'total',
            'users.stack': 'Messages: {m}, stickers: {s}',
            'chip.msgs': 'messages:',
            'chip.stk': 'stickers:',
            'chip.len': '≈ <b>{n}</b> chars',
            'chip.lenTitle': 'Average length of a text message',
            'chip.media': 'media:',
            'chip.days': 'active days:',
            'chip.starts': 'starts conversations:',
            'chip.startsTitle': 'How many times they wrote first after a pause longer than 6 hours',
            'chip.reply': 'replies in <b>{d}</b>',
            'chip.replyTitle': 'Median time to reply to someone else\'s message',
            'chip.emojiTitle': 'Favourite emoji',
            'chip.reacts': 'reactions received:',
            'react.title': 'Reactions',
            'react.summary': 'Total: {r} · messages with reactions: {m}',
            'react.top': 'Top reactions',
            'react.people': 'Who gives and gets them',
            'react.given': 'gave {n}',
            'react.received': 'got {n}',
            'react.pairs': 'Who reacts to whom',
            'react.best': 'Most reacted messages',
            'react.none': 'This export has no reactions. Telegram added them to exports in 2024 — export the chat again if you want these stats.',
            'react.note': 'Telegram only stores who left the most recent reactions on a message, so “who reacts to whom” is an estimate.',
            'react.custom': 'custom emoji',
            'react.paid': 'paid stars',
            'words.title': 'Top words',
            'words.all': 'Everyone',
            'words.search': 'Search a word...',
            'words.more': 'Show more ({n})',
            'words.notFound': 'No such word',
            'words.none': 'No words yet',
            'emoji.title': 'Emoji',
            'emoji.text': 'In text',
            'emoji.stickers': 'Stickers',
            'emoji.noneText': 'No emoji found in messages',
            'emoji.noneStk': 'No stickers',
            'media.title': 'Message types',
            'kind.text': 'Text', 'kind.sticker': 'Stickers', 'kind.photo': 'Photos', 'kind.video': 'Videos',
            'kind.round': 'Video notes', 'kind.voice': 'Voice', 'kind.gif': 'GIFs', 'kind.audio': 'Audio',
            'kind.file': 'Files', 'kind.poll': 'Polls', 'kind.location': 'Locations', 'kind.contact': 'Contacts',
            'm.sticker': 'Sticker', 'm.photo': 'Photo', 'm.video': 'Video', 'm.round': 'Video message',
            'm.voice': 'Voice message', 'm.gif': 'GIF', 'm.audio': 'Audio', 'm.file': 'File', 'm.poll': 'Poll',
            'm.location': 'Location', 'm.contact': 'Contact', 'm.text': 'Message',
            'wrap.title': 'Year in review',
            'wrap.sub': 'A story-sized card — save it and send it to your chat buddy',
            'wrap.download': 'Download PNG',
            'wrap.copy': 'Copy',
            'wrap.copied': 'Image copied to clipboard',
            'wrap.copyFail': 'Your browser blocked copying — use “Download PNG” instead',
            'w.messages': 'Messages',
            'w.stickers': 'Stickers',
            'w.andStickers': 'and {n}',
            'w.vs': '{p} vs {y}',
            'w.days': 'Days in touch',
            'w.ofDays': 'out of {n}',
            'w.hotDay': 'Busiest day',
            'w.word': 'Word of the year',
            'w.emoji': 'Emoji of the year',
            'w.reaction': 'Reaction of the year',
            'w.peak': 'Favourite time',
            'w.peakSub': 'peak activity',
            'w.month': 'Best month',
            'w.streak': 'Longest streak',
            'w.streakSub': 'days in a row',
            'w.voice': 'Voice messages',
            'w.who': 'Who wrote more',
            'w.leader': 'Top chatter',
            'w.others': 'others',
            'w.footer': 'Telegram Analytics',
            'viewer.title': 'Messages',
            'viewer.search': 'Search text...',
            'viewer.allAuthors': 'All authors',
            'viewer.day': 'This day',
            'viewer.all': 'Whole chat',
            'viewer.prev': 'Previous day with messages',
            'viewer.next': 'Next day with messages',
            'viewer.found': 'Found: {n}',
            'viewer.hintAll': 'Type some text or pick an author to search the whole chat',
            'viewer.noDay': 'No messages on this day.',
            'viewer.nearest': 'Nearest day: {date}',
            'viewer.nothing': 'Nothing found',
            'viewer.limited': 'Showing the latest {n} of {total} matches. Refine the query to see the rest.',
            'viewer.openDay': 'Open the whole day',
            'viewer.fwd': '↪ Forwarded from {name}',
            'viewer.goto': 'Go to message',
            'viewer.edited': 'edited',
            'viewer.empty': 'Empty message',
            'dur.sec': '{n}s', 'dur.min': '{n} min', 'dur.hm': '{h}h {m}m', 'dur.h': '{h}h', 'dur.d': '{n}d',
            'ai.name': 'AI analyst',
            'ai.status': 'Knows your chat statistics',
            'ai.typing': 'Typing...',
            'ai.clear': 'Clear conversation',
            'ai.settings': 'API settings',
            'ai.close': 'Close',
            'ai.settingsTitle': 'AI settings',
            'ai.settingsDesc': 'Any OpenAI-compatible API works: Groq, OpenAI, OpenRouter, a local LM Studio / Ollama. Settings are stored only in this browser.',
            'ai.key': 'API key',
            'ai.keyPh': 'gsk_... (optional if the server has a key)',
            'ai.model': 'Model',
            'ai.base': 'API address (Base URL)',
            'ai.sample': 'Send the last 150 messages to the AI (better answers, but the text goes to the API)',
            'ai.save': 'Save',
            'ai.cancel': 'Cancel',
            'ai.input': 'Ask something about the chat...',
            'ai.send': 'Send',
            'ai.noteFile': 'The page is not served by server.py, so requests go straight to the API and need a key.',
            'ai.noteServer': 'The server has a default Groq key — you can leave the key field empty.',
            'ai.noteNoServer': 'No default key is set on the server (.env file).',
            'ai.hello': 'Hi! I have studied the stats of **{chat}**{who}. Ask me anything: who is more active, how your chat changed over time, who replies faster. Or pick a question below 👇',
            'ai.whoTwo': ' ({a} & {b})',
            'ai.whoMany': ' — {n}',
            'ai.needKey': 'Set an API key in the settings (⚙) or run the app via server.py.',
            'ai.checkKey': ' — check the API key in the settings (⚙).',
            'ai.emptyReply': 'The model returned an empty reply',
            'ai.network': 'Cannot reach the server or the API (check the address and your connection).',
            'ai.suggestions': [
                'Who is the most active and why?',
                'Describe the texting style of each participant',
                'How did the activity change over the years?',
                'Who starts conversations and who replies faster?',
                'Write a funny compatibility horoscope',
                'Judging by the words, what do we talk about most?',
            ],
            'ai.system': 'You are a witty and attentive analyst of Telegram conversations. Below are aggregated statistics of a chat as JSON.\n\n{json}\n\nAnswer in English. Rely on the numbers and quote them, draw conclusions about trends, communication style and the participants\' personalities. Jokes and playful “compatibility horoscopes” are welcome, but never invent facts that are not in the data: if information is missing, say so. Use Markdown (lists, **bold**) and keep answers to the point.',
            'ai.sampleHeader': 'Most recent messages (to understand topics and tone):',
            chatTypes: {
                personal_chat: 'Personal chat', bot_chat: 'Bot chat', private_group: 'Group',
                private_supergroup: 'Supergroup', public_supergroup: 'Public group',
                private_channel: 'Channel', public_channel: 'Public channel', saved_messages: 'Saved Messages',
            },
            plurals: {
                message: ['message', 'messages'],
                sticker: ['sticker', 'stickers'],
                participant: ['participant', 'participants'],
                day: ['day', 'days'],
                year: ['year', 'years'],
                chat: ['chat', 'chats'],
                entry: ['record', 'records'],
                reaction: ['reaction', 'reactions'],
                time: ['time', 'times'],
            },
        },
    };

    let LANG = (document.documentElement.lang === 'en') ? 'en' : 'ru';
    let LOCALE = LANG === 'ru' ? 'ru-RU' : 'en-US';
    let nf = new Intl.NumberFormat(LOCALE);
    let compactNf = new Intl.NumberFormat(LOCALE, { notation: 'compact', maximumFractionDigits: 1 });
    let decNf = new Intl.NumberFormat(LOCALE, { maximumFractionDigits: 1 });
    let pluralRules = new Intl.PluralRules(LOCALE);

    function t(key, vars) {
        let s = I18N[LANG][key];
        if (s === undefined) s = I18N.ru[key];
        if (s === undefined) return key;
        if (vars && typeof s === 'string') s = s.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : ''));
        return s;
    }
    function pl(n, key) {
        const forms = I18N[LANG].plurals[key];
        const cat = pluralRules.select(n);
        if (LANG === 'ru') return forms[cat === 'one' ? 0 : cat === 'few' || cat === 'other' ? 1 : 2];
        return forms[cat === 'one' ? 0 : 1];
    }
    const pn = (n, key) => `${fmt(n)} ${pl(n, key)}`;
    const quote = (s) => (LANG === 'ru' ? `«${s}»` : `“${s}”`);

    // ================================================================
    // Утилиты
    // ================================================================
    const $ = (id) => document.getElementById(id);
    const fmt = (n) => nf.format(Math.round(n));
    const fmtCompact = (n) => (n < 10000 ? fmt(n) : compactNf.format(n));
    const pad2 = (n) => String(n).padStart(2, '0');
    const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    const USER_COLORS = ['#4c9dff', '#ff9f43', '#2ed3a0', '#ff6b9a', '#a68bff', '#22c3e6', '#f7c948', '#ff7a59', '#7bd88f', '#e879f9', '#5eead4', '#fb7185'];
    const TREND_COLORS = ['#4c9dff', '#ff9f43', '#2ed3a0', '#ff6b9a'];
    const OTHER_COLOR = '#8d97a8';
    const KIND_ICONS = {
        text: '💬', sticker: '🙂', photo: '🖼️', video: '🎬', round: '⏺️', voice: '🎤',
        gif: '🎞️', audio: '🎵', file: '📎', poll: '📊', location: '📍', contact: '👤',
    };
    const CUSTOM_REACTION = '✨';
    const PAID_REACTION = '⭐';

    function escapeHTML(str) {
        return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }

    function hexToRgba(hex, a) {
        const h = hex.trim().replace('#', '');
        const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
        const n = parseInt(full, 16);
        return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
    }

    function formatDuration(sec) {
        sec = Math.round(sec);
        if (sec < 60) return t('dur.sec', { n: sec });
        const min = Math.round(sec / 60);
        if (min < 60) return t('dur.min', { n: min });
        const h = Math.floor(min / 60), m = min % 60;
        if (h < 48) return m ? t('dur.hm', { h, m }) : t('dur.h', { h });
        return t('dur.d', { n: Math.round(h / 24) });
    }

    function formatClock(sec) {
        sec = Math.round(sec || 0);
        const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
        return h ? `${h}:${pad2(m)}:${pad2(s)}` : `${m}:${pad2(s)}`;
    }

    function initials(name) {
        const parts = String(name).trim().split(/\s+/).filter(Boolean);
        if (!parts.length) return '?';
        const first = Array.from(parts[0])[0] || '?';
        const second = parts.length > 1 ? Array.from(parts[1])[0] || '' : '';
        return (first + second).toUpperCase();
    }

    const nextFrame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));

    // ---------- Даты: «номера дней» в UTC, чтобы не зависеть от перехода на летнее время ----------
    const DAY = 86400000;
    function dayNum(key) {
        return Math.round(Date.UTC(+key.slice(0, 4), +key.slice(5, 7) - 1, +key.slice(8, 10)) / DAY);
    }
    function keyFromNum(n) {
        const d = new Date(n * DAY);
        return `${d.getUTCFullYear()}-${pad2(d.getUTCMonth() + 1)}-${pad2(d.getUTCDate())}`;
    }
    const weekdayOf = (n) => (n + 3) % 7; // 0 = понедельник (01.01.1970 был четвергом)

    const dtfCache = new Map();
    function fmtDate(n, opts) {
        const k = LOCALE + JSON.stringify(opts);
        let f = dtfCache.get(k);
        if (!f) dtfCache.set(k, (f = new Intl.DateTimeFormat(LOCALE, { timeZone: 'UTC', ...opts })));
        return f.format(new Date(n * DAY)).replace(/\s*г\.\s*$/, '').replace(/\s*г\.,/, ',');
    }
    const formatDay = (n, { year = true, weekday = false } = {}) =>
        cap(fmtDate(n, { day: 'numeric', month: 'long', ...(year ? { year: 'numeric' } : {}), ...(weekday ? { weekday: 'short' } : {}) }));
    const formatDayShort = (n) => fmtDate(n, { day: 'numeric', month: 'short', year: 'numeric' });
    const formatDayNoYear = (n) => fmtDate(n, { day: 'numeric', month: 'short' });
    const monthTitle = (n) => cap(fmtDate(n, { month: 'long', year: 'numeric' }));
    const monthName = (m) => cap(fmtDate(Math.round(Date.UTC(2001, m, 1) / DAY), { month: 'long' }));
    const weekdayShort = (d) => cap(fmtDate(4 + d, { weekday: 'short' })); // 05.01.1970 — понедельник
    const weekdayLong = (d) => fmtDate(4 + d, { weekday: 'long' });

    // ================================================================
    // Состояние
    // ================================================================
    const state = {
        exportData: null,
        chat: null,
        a: null,             // результат analyze()
        msgs: [],
        users: [],
        userById: new Map(),
        activeDays: [],
        series: {},
        granularity: 'day',
        visible: { messages: true, stickers: true },
        sortedWords: null,
        wordsByUser: new Map(),
        wordLimit: 30,
        usersExpanded: false,
        emojiMode: 'text',
        trend: { terms: [], gran: 'month', data: [] },
        wrappedYear: null,
        wrappedCache: new Map(),
        viewer: { day: null, scope: 'day', query: '', user: '' },
        aiContext: null,
        aiHistory: [],
        aiBusy: false,
        serverKey: false,
    };

    // ================================================================
    // Текст: слова и эмодзи
    // ================================================================
    const STOP_WORDS = new Set((
        'что как это так все если или уже еще только где кто когда чем при было меня тебя чтобы вот даже очень просто можно надо ' +
        'будет потом сейчас тоже какой такой нет там тут мне вас нас они может быть для без под над после перед про его ее она оно ' +
        'них ним ней нему него тебе себя себе сам сама сами свой своя свои твой твоя твои мой моя мои наш наша наши ваш ваша ваши ' +
        'этот эта эти тот та те того тому том той этого этому этом этой эту этих кого чего кому чему ком чем ничего никто ' +
        'нибудь либо ведь вообще тогда значит один одна одно был была были будут буду будем будешь есть нету ими ему ' +
        'вам нам им ей чтоб хотя пока почему зачем откуда куда туда сюда здесь всех всем всеми весь вся всю всего всему также ' +
        'который которая которые которых которое которой котором которую какая какие какое каких такая такие такое ' +
        'тож щас чтото чето вроде типа кстати короче наверное наверно вдруг ага неа угу ааа эээ ммм ' +
        'the and you that for are with this have was not but what all can your just from they will about out like get know ' +
        'its don dont yes yeah okay one there their them then than when were been has had would could should how who why ' +
        'http https www com org net html'
    ).split(/\s+/));
    const EMOJI_RE = /(?:\p{RI}\p{RI}|\p{Extended_Pictographic}(?:\uFE0F|\p{EMod})?(?:\u200D\p{Extended_Pictographic}(?:\uFE0F|\p{EMod})?)*)/gu;
    const URL_RE = /https?:\/\/\S+|www\.\S+/gi;
    const SPLIT_RE = /[^\p{L}\p{N}]+/u;

    function tokenize(text) {
        const out = [];
        for (const w of text.toLowerCase().replace(URL_RE, ' ').replace(/ё/g, 'е').split(SPLIT_RE)) {
            if (w.length < 3 || w.length > 30 || STOP_WORDS.has(w) || /^\d+$/.test(w)) continue;
            out.push(w);
        }
        return out;
    }

    // ================================================================
    // Разбор экспорта
    // ================================================================
    function extractText(textObj) {
        if (typeof textObj === 'string') return textObj;
        if (Array.isArray(textObj)) {
            // Части уже содержат нужные пробелы — склеиваем без разделителя
            return textObj.map((item) => (typeof item === 'string' ? item : (item && item.text) || '')).join('');
        }
        return '';
    }

    function detectKind(m) {
        switch (m.media_type) {
            case 'sticker': return 'sticker';
            case 'animation': return 'gif';
            case 'voice_message': return 'voice';
            case 'video_message': return 'round';
            case 'video_file': return 'video';
            case 'audio_file': return 'audio';
        }
        if (typeof m.file === 'string' && m.file.startsWith('stickers/')) return 'sticker';
        if (m.photo) return 'photo';
        if (m.poll) return 'poll';
        if (m.location_information || m.place_name) return 'location';
        if (m.contact_information || m.contact_vcard) return 'contact';
        if (m.file || m.media_type) return 'file';
        return 'text';
    }

    function parseReactions(list) {
        if (!Array.isArray(list) || !list.length) return null;
        const out = [];
        for (const r of list) {
            const count = +r.count || 0;
            if (!count) continue;
            let e = r.type === 'emoji' && r.emoji ? r.emoji : r.type === 'paid' ? PAID_REACTION : CUSTOM_REACTION;
            // Telegram пишет «❤» без U+FE0F — без него сердце рисуется чёрно-белым
            if (/^\p{Extended_Pictographic}$/u.test(e) && !/\p{Emoji_Presentation}/u.test(e)) e += '️';
            const from = Array.isArray(r.recent)
                ? r.recent.map((x) => ({ id: String(x.from_id || (x.from ? 'name:' + x.from : '')), name: x.from || '' })).filter((x) => x.id)
                : [];
            out.push({ e, c: count, from });
        }
        return out.length ? out : null;
    }

    function findChats(data) {
        if (data && Array.isArray(data.messages)) return [data];
        const chats = [];
        if (data && data.chats && Array.isArray(data.chats.list)) chats.push(...data.chats.list);
        if (data && data.left_chats && Array.isArray(data.left_chats.list)) chats.push(...data.left_chats.list);
        return chats.filter((c) => c && Array.isArray(c.messages));
    }

    function chatTitle(chat) {
        if (chat.name) return chat.name;
        if (chat.type === 'saved_messages') return t('saved');
        return t('untitled');
    }

    function analyze(chat) {
        const users = new Map();
        const getUser = (id, name) => {
            let u = users.get(id);
            if (!u) {
                u = {
                    id, name: name || '', total: 0, messages: 0, stickers: 0,
                    kinds: Object.create(null), chars: 0, textMsgs: 0, longest: 0,
                    days: 0, lastDay: -1, first: null, last: null,
                    voiceSec: 0, starts: 0, replyGaps: [], emoji: new Map(),
                    rGiven: 0, rReceived: 0, rGivenEmoji: new Map(),
                };
                users.set(id, u);
            } else if (name) {
                u.name = name; // берём самое свежее имя
            }
            return u;
        };

        // 1. Нормализация
        const msgs = [];
        for (const m of chat.messages) {
            if (!m || m.type === 'service' || typeof m.date !== 'string' || m.date.length < 10) continue;
            const uid = String(m.from_id || (m.from ? 'name:' + m.from : 'unknown'));
            const ts = m.date_unixtime ? +m.date_unixtime : Date.parse(m.date) / 1000;
            msgs.push({
                id: m.id,
                date: m.date,
                ts: Number.isFinite(ts) ? ts : 0,
                author: uid,
                authorName: m.from || '',
                kind: detectKind(m),
                text: extractText(m.text),
                rich: Array.isArray(m.text) && m.text.some((p) => typeof p !== 'string') ? m.text : null,
                reply: m.reply_to_message_id,
                fwd: m.forwarded_from || null,
                edited: !!m.edited,
                emoji: m.sticker_emoji || '',
                dur: m.duration_seconds || 0,
                fileName: m.file_name || '',
                performer: m.performer || '',
                title: m.title || '',
                poll: m.poll && m.poll.question ? m.poll.question : '',
                rx: parseReactions(m.reactions),
                rxTotal: 0,
            });
        }
        let sorted = true;
        for (let i = 1; i < msgs.length; i++) if (msgs[i].date < msgs[i - 1].date) { sorted = false; break; }
        if (!sorted) msgs.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));

        // 2. Агрегаты
        const byId = new Map();
        const dayRange = new Map();
        const dayUsers = new Map();
        const dayMsg = new Map(), dayStk = new Map();
        const activeDays = [];
        const heat = Array.from({ length: 7 }, () => new Array(24).fill(0));
        const years = new Map();
        const kindsTotal = Object.create(null);
        const words = new Map();
        const emoji = new Map();
        const stickerEmoji = new Map();
        const reactions = { total: 0, msgs: 0, byEmoji: new Map(), pairs: new Map(), top: [] };
        let totalMsg = 0, totalStk = 0, voiceSec = 0;
        const CONVO_GAP = 6 * 3600;  // пауза, после которой начинается новый разговор
        const REPLY_GAP = 12 * 3600; // ответы дольше 12 часов не учитываем во времени ответа

        let prev = null;
        let curDay = -1, curDayStart = 0;

        for (let i = 0; i < msgs.length; i++) {
            const m = msgs[i];
            const key = m.date.slice(0, 10);
            const dn = dayNum(key);
            m.day = dn;
            if (m.id !== undefined) byId.set(m.id, i);

            if (dn !== curDay) {
                if (curDay !== -1) dayRange.set(curDay, [curDayStart, i]);
                curDay = dn;
                curDayStart = i;
                activeDays.push(dn);
            }

            const u = getUser(m.author, m.authorName);
            u.total++;
            u.kinds[m.kind] = (u.kinds[m.kind] || 0) + 1;
            kindsTotal[m.kind] = (kindsTotal[m.kind] || 0) + 1;
            if (u.lastDay !== dn) { u.days++; u.lastDay = dn; }
            if (u.first === null) u.first = dn;
            u.last = dn;

            let du = dayUsers.get(dn);
            if (!du) dayUsers.set(dn, (du = new Map()));
            du.set(m.author, (du.get(m.author) || 0) + 1);

            heat[weekdayOf(dn)][+m.date.slice(11, 13) || 0]++;

            const y = key.slice(0, 4);
            let yr = years.get(y);
            if (!yr) years.set(y, (yr = { messages: 0, stickers: 0, users: new Map() }));
            yr.users.set(m.author, (yr.users.get(m.author) || 0) + 1);

            if (m.kind === 'sticker') {
                totalStk++; u.stickers++; yr.stickers++;
                dayStk.set(dn, (dayStk.get(dn) || 0) + 1);
                if (m.emoji) stickerEmoji.set(m.emoji, (stickerEmoji.get(m.emoji) || 0) + 1);
            } else {
                totalMsg++; u.messages++; yr.messages++;
                dayMsg.set(dn, (dayMsg.get(dn) || 0) + 1);
            }
            if (m.kind === 'voice') { u.voiceSec += m.dur; voiceSec += m.dur; }

            if (!prev || m.ts - prev.ts > CONVO_GAP) u.starts++;
            else if (prev.author !== m.author && m.ts - prev.ts <= REPLY_GAP && m.ts >= prev.ts) u.replyGaps.push(m.ts - prev.ts);
            prev = m;

            if (m.text && m.kind !== 'sticker') {
                const len = m.text.length;
                u.chars += len; u.textMsgs++;
                if (len > u.longest) u.longest = len;
                const em = m.text.match(EMOJI_RE);
                if (em) for (const e of em) {
                    emoji.set(e, (emoji.get(e) || 0) + 1);
                    u.emoji.set(e, (u.emoji.get(e) || 0) + 1);
                }
                for (const w of tokenize(m.text)) {
                    let rec = words.get(w);
                    if (!rec) words.set(w, (rec = { t: 0, u: Object.create(null) }));
                    rec.t++;
                    rec.u[m.author] = (rec.u[m.author] || 0) + 1;
                }
            }

            // Реакции
            if (m.rx) {
                let total = 0;
                for (const r of m.rx) {
                    total += r.c;
                    reactions.byEmoji.set(r.e, (reactions.byEmoji.get(r.e) || 0) + r.c);
                    for (const f of r.from) {
                        const giver = getUser(f.id, f.name);
                        giver.rGiven++;
                        giver.rGivenEmoji.set(r.e, (giver.rGivenEmoji.get(r.e) || 0) + 1);
                        const pk = f.id + '\u0000' + m.author;
                        reactions.pairs.set(pk, (reactions.pairs.get(pk) || 0) + 1);
                    }
                }
                m.rxTotal = total;
                u.rReceived += total;
                reactions.total += total;
                reactions.msgs++;
                reactions.top.push(i);
            }
        }
        if (curDay !== -1) dayRange.set(curDay, [curDayStart, msgs.length]);
        reactions.top = reactions.top.sort((x, y) => msgs[y].rxTotal - msgs[x].rxTotal).slice(0, 6);

        // 3. Участники (в списке — только писавшие; «только реагировавшие» остаются в userById)
        const all = [...users.values()];
        all.forEach((u) => { if (!u.name) u.name = t('deleted'); u.initials = initials(u.name); });
        const userList = all.filter((u) => u.total > 0).sort((a, b) => b.total - a.total);
        userList.forEach((u, i) => {
            u.rank = i;
            u.color = USER_COLORS[i % USER_COLORS.length];
            u.avgLen = u.textMsgs ? u.chars / u.textMsgs : 0;
            if (u.replyGaps.length) {
                u.replyGaps.sort((a, b) => a - b);
                u.medianReply = u.replyGaps[Math.floor(u.replyGaps.length / 2)];
            } else {
                u.medianReply = null;
            }
            u.topEmoji = [...u.emoji.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
        });
        all.forEach((u) => {
            u.replyGaps = null;
            u.emoji = null;
            if (u.total === 0) { u.rank = -1; u.color = OTHER_COLOR; u.topEmoji = []; }
            u.favReaction = [...u.rGivenEmoji.entries()].sort((a, b) => b[1] - a[1])[0] || null;
        });

        // 4. Рекорды и серии
        let bestDay = null, bestDayCount = 0;
        for (const [dn, [s, e]] of dayRange) {
            if (e - s > bestDayCount) { bestDayCount = e - s; bestDay = dn; }
        }
        let streak = 0, bestStreak = 0, bestStreakEnd = null;
        for (let i = 0; i < activeDays.length; i++) {
            streak = i > 0 && activeDays[i] === activeDays[i - 1] + 1 ? streak + 1 : 1;
            if (streak > bestStreak) { bestStreak = streak; bestStreakEnd = activeDays[i]; }
        }

        return {
            msgs, byId, users: userList, userById: new Map(all.map((u) => [u.id, u])),
            activeDays, dayRange, dayUsers, dayMsg, dayStk, heat, years, kindsTotal,
            words, emoji, stickerEmoji, reactions, totalMsg, totalStk, voiceSec,
            bestDay, bestDayCount, bestStreak, bestStreakEnd,
        };
    }

    // ================================================================
    // Ряды для графиков
    // ================================================================
    function buildBuckets(first, last) {
        const mk = (start, end) => ({ start, end });
        const day = [];
        for (let n = first; n <= last; n++) day.push(mk(n, n));
        const week = [];
        for (let n = first - weekdayOf(first); n <= last; n += 7) week.push(mk(n, n + 6));
        const month = [];
        const d = new Date(first * DAY);
        let y = d.getUTCFullYear(), m = d.getUTCMonth();
        for (;;) {
            const s = Math.round(Date.UTC(y, m, 1) / DAY);
            if (s > last) break;
            month.push(mk(s, Math.round(Date.UTC(y, m + 1, 0) / DAY)));
            if (++m === 12) { m = 0; y++; }
        }
        return { day, week, month };
    }

    // Суммирует значения по дням (Map день → число) в корзины
    function sumBuckets(buckets, dayMap) {
        return buckets.map((b) => {
            let s = 0;
            for (let d = b.start; d <= b.end; d++) s += dayMap.get(d) || 0;
            return s;
        });
    }

    function buildSeries(a) {
        const buckets = buildBuckets(a.activeDays[0], a.activeDays[a.activeDays.length - 1]);
        const out = {};
        for (const g of ['day', 'week', 'month']) {
            const msg = sumBuckets(buckets[g], a.dayMsg);
            const stk = sumBuckets(buckets[g], a.dayStk);
            out[g] = buckets[g].map((b, i) => ({ ...b, messages: msg[i], stickers: stk[i] }));
        }
        return out;
    }

    // ================================================================
    // Универсальный график по времени (линии или столбцы)
    // ================================================================
    const tooltip = $('chart-tooltip');
    const charts = [];

    function niceStep(raw) {
        if (raw <= 1) return 1;
        const exp = Math.pow(10, Math.floor(Math.log10(raw)));
        const f = raw / exp;
        const n = f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10;
        return Math.max(1, n * exp);
    }

    function bucketLabel(b, g, withYear) {
        if (g === 'month') {
            const isJan = new Date(b.start * DAY).getUTCMonth() === 0;
            return fmtDate(b.start, withYear || isJan ? { month: 'short', year: 'numeric' } : { month: 'short' });
        }
        return fmtDate(b.start, withYear ? { day: 'numeric', month: 'short', year: 'numeric' } : { day: 'numeric', month: 'short' });
    }

    function bucketTitle(b, g) {
        if (g === 'day') return formatDay(b.start, { weekday: true });
        if (g === 'month') return monthTitle(b.start);
        return `${formatDayNoYear(b.start)} – ${formatDayShort(b.end)}`;
    }

    function positionTooltip(cx, cy) {
        const tw = tooltip.offsetWidth, th = tooltip.offsetHeight;
        let x = cx + 16, y = cy + 16;
        if (x + tw > window.innerWidth - 8) x = cx - tw - 16;
        if (y + th > window.innerHeight - 8) y = cy - th - 16;
        tooltip.style.left = Math.max(8, x) + 'px';
        tooltip.style.top = Math.max(8, y) + 'px';
    }

    function hideTooltip() {
        tooltip.classList.add('hidden');
        for (const c of charts) if (c.hover !== -1) { c.hover = -1; c.request(); }
    }

    class TimeChart {
        constructor(canvas, wrap, { tooltipHTML, onClick, isClickable }) {
            this.canvas = canvas;
            this.wrap = wrap;
            this.ctx = canvas.getContext('2d');
            this.tooltipHTML = tooltipHTML;
            this.onClick = onClick;
            this.isClickable = isClickable || (() => true);
            this.data = null;
            this.geom = null;
            this.hover = -1;
            this.queued = false;
            canvas.addEventListener('pointermove', (e) => this.move(e));
            canvas.addEventListener('pointerleave', () => hideTooltip());
            canvas.addEventListener('click', (e) => {
                const i = this.indexAt(e);
                if (i >= 0 && this.isClickable(i)) this.onClick(i);
            });
            new ResizeObserver(() => this.request()).observe(wrap);
            charts.push(this);
        }

        set(data) {
            this.data = data;
            this.hover = -1;
            this.draw();
        }

        request() {
            if (this.queued) return;
            this.queued = true;
            requestAnimationFrame(() => { this.queued = false; this.draw(); });
        }

        indexAt(e) {
            if (!this.geom) return -1;
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left, y = e.clientY - rect.top;
            const { pad, gw, gh, n, slot, useBars } = this.geom;
            if (x < pad.left - 6 || x > pad.left + gw + 6 || y < 0 || y > pad.top + gh + 4) return -1;
            const i = useBars ? Math.floor((x - pad.left) / slot) : Math.round(((x - pad.left) / gw) * (n - 1));
            return Math.max(0, Math.min(n - 1, i));
        }

        move(e) {
            const i = this.indexAt(e);
            if (i < 0) { hideTooltip(); this.canvas.style.cursor = 'default'; return; }
            if (i !== this.hover) { this.hover = i; this.request(); }
            tooltip.innerHTML = this.tooltipHTML(i);
            tooltip.classList.remove('hidden');
            positionTooltip(e.clientX, e.clientY);
            this.canvas.style.cursor = this.isClickable(i) ? 'pointer' : 'default';
        }

        draw() {
            const d = this.data;
            const { canvas, ctx, wrap } = this;
            const w = wrap.clientWidth, h = wrap.clientHeight;
            if (!w || !h) return;
            const dpr = window.devicePixelRatio || 1;
            if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
                canvas.width = Math.round(w * dpr);
                canvas.height = Math.round(h * dpr);
            }
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, w, h);
            this.geom = null;
            if (!d || !d.buckets.length || !d.series.length) return;

            const css = getComputedStyle(document.documentElement);
            const col = (c) => (c.startsWith('--') ? css.getPropertyValue(c).trim() || '#4c9dff' : c);
            const C = {
                grid: css.getPropertyValue('--border').trim(),
                text: css.getPropertyValue('--faint').trim(),
                strong: css.getPropertyValue('--muted').trim(),
                surface: css.getPropertyValue('--surface').trim(),
            };
            ctx.font = '11px Inter, system-ui, sans-serif';

            const buckets = d.buckets;
            const n = buckets.length;
            const series = d.series.map((s) => ({ ...s, color: col(s.color) }));
            let max = 0;
            for (const s of series) for (const v of s.values) if (v > max) max = v;
            const step = niceStep(Math.max(max, 4) / 4);
            const yMax = Math.max(step * Math.ceil(max / step), step);

            let yLabelW = 0;
            for (let v = 0; v <= yMax; v += step) yLabelW = Math.max(yLabelW, ctx.measureText(fmtCompact(v)).width);
            const pad = { top: 10, right: 8, bottom: 26, left: Math.ceil(yLabelW) + 12 };
            const gw = w - pad.left - pad.right, gh = h - pad.top - pad.bottom;
            const useBars = n <= 90;
            const slot = gw / n;
            const xAt = useBars
                ? (i) => pad.left + slot * (i + 0.5)
                : (i) => pad.left + (n === 1 ? gw / 2 : (gw * i) / (n - 1));
            const yAt = (v) => pad.top + gh - (v / yMax) * gh;
            this.geom = { pad, gw, gh, n, slot, useBars };

            // Сетка и ось Y
            ctx.strokeStyle = C.grid;
            ctx.lineWidth = 1;
            ctx.fillStyle = C.text;
            ctx.textAlign = 'right';
            ctx.textBaseline = 'middle';
            for (let v = 0; v <= yMax + 0.0001; v += step) {
                const y = Math.round(yAt(v)) + 0.5;
                ctx.beginPath();
                ctx.moveTo(pad.left, y);
                ctx.lineTo(w - pad.right, y);
                ctx.stroke();
                ctx.fillText(fmtCompact(v), pad.left - 8, y);
            }

            // Ось X
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            const sampleW = ctx.measureText(bucketLabel(buckets[0], d.granularity, true)).width + 18;
            const every = Math.max(1, Math.ceil((n * sampleW) / gw));
            let prevYear = null, lastRight = -Infinity;
            for (let i = 0; i < n; i += every) {
                const y = new Date(buckets[i].start * DAY).getUTCFullYear();
                const label = bucketLabel(buckets[i], d.granularity, prevYear !== y);
                const lw = ctx.measureText(label).width;
                const x = Math.min(Math.max(xAt(i), lw / 2), w - lw / 2);
                if (x - lw / 2 < lastRight + 10) continue; // не даём подписям налезать друг на друга
                prevYear = y;
                lastRight = x + lw / 2;
                ctx.fillText(label, x, h - pad.bottom + 8);
            }

            if (useBars) {
                const groupW = Math.max(1, Math.min(slot * 0.78, 48));
                const barW = groupW / series.length;
                series.forEach((s, si) => {
                    for (let i = 0; i < n; i++) {
                        const v = s.values[i];
                        if (!v) continue;
                        const x = xAt(i) - groupW / 2 + si * barW;
                        const y = yAt(v);
                        ctx.fillStyle = this.hover === -1 || this.hover === i ? s.color : hexToRgba(s.color, 0.45);
                        roundRect(ctx, x + (barW > 4 ? 0.5 : 0), y, Math.max(1, barW - (barW > 4 ? 1 : 0)), pad.top + gh - y, Math.min(4, barW / 3));
                    }
                });
            } else {
                // Первая серия рисуется последней — поверх остальных
                for (const s of series.slice().reverse()) {
                    const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + gh);
                    grad.addColorStop(0, hexToRgba(s.color, d.fill === false ? 0 : 0.3));
                    grad.addColorStop(1, hexToRgba(s.color, 0));
                    ctx.beginPath();
                    ctx.moveTo(xAt(0), yAt(s.values[0]));
                    for (let i = 1; i < n; i++) ctx.lineTo(xAt(i), yAt(s.values[i]));
                    ctx.strokeStyle = s.color;
                    ctx.lineWidth = n > 600 ? 1.2 : 1.8;
                    ctx.lineJoin = 'round';
                    ctx.stroke();
                    ctx.lineTo(xAt(n - 1), pad.top + gh);
                    ctx.lineTo(xAt(0), pad.top + gh);
                    ctx.closePath();
                    ctx.fillStyle = grad;
                    ctx.fill();
                }
                if (this.hover >= 0 && this.hover < n) {
                    const x = Math.round(xAt(this.hover)) + 0.5;
                    ctx.strokeStyle = C.strong;
                    ctx.lineWidth = 1;
                    ctx.setLineDash([3, 3]);
                    ctx.beginPath();
                    ctx.moveTo(x, pad.top);
                    ctx.lineTo(x, pad.top + gh);
                    ctx.stroke();
                    ctx.setLineDash([]);
                    for (const s of series) {
                        ctx.beginPath();
                        ctx.arc(xAt(this.hover), yAt(s.values[this.hover]), 4.5, 0, Math.PI * 2);
                        ctx.fillStyle = s.color;
                        ctx.fill();
                        ctx.lineWidth = 2;
                        ctx.strokeStyle = C.surface;
                        ctx.stroke();
                    }
                }
            }
        }
    }

    function roundRect(c, x, y, w, h, r) {
        r = Math.max(0, Math.min(r, h, w / 2));
        c.beginPath();
        c.moveTo(x, y + h);
        c.lineTo(x, y + r);
        c.quadraticCurveTo(x, y, x + r, y);
        c.lineTo(x + w - r, y);
        c.quadraticCurveTo(x + w, y, x + w, y + r);
        c.lineTo(x + w, y + h);
        c.closePath();
        c.fill();
    }

    window.addEventListener('scroll', () => { if (!tooltip.classList.contains('hidden')) hideTooltip(); }, { passive: true });

    // Бинарный поиск по активным дням
    function lowerBound(arr, v) {
        let lo = 0, hi = arr.length;
        while (lo < hi) { const mid = (lo + hi) >> 1; if (arr[mid] < v) lo = mid + 1; else hi = mid; }
        return lo;
    }
    function firstActiveDayIn(start, end) {
        const i = lowerBound(state.activeDays, start);
        return i < state.activeDays.length && state.activeDays[i] <= end ? state.activeDays[i] : null;
    }

    // ================================================================
    // Статические тексты, язык и тема
    // ================================================================
    function applyStaticTexts() {
        document.documentElement.lang = LANG;
        document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
        document.querySelectorAll('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
        document.querySelectorAll('[data-i18n-ph]').forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
        document.querySelectorAll('[data-i18n-title]').forEach((el) => {
            el.title = t(el.dataset.i18nTitle);
            el.setAttribute('aria-label', t(el.dataset.i18nTitle));
        });
        $('lang-toggle').textContent = t('nav.langCode');
        if (!state.aiBusy) $('ai-status').textContent = t('ai.status');
    }

    function setLang(lang) {
        const prevDeleted = t('deleted');
        LANG = lang;
        LOCALE = lang === 'ru' ? 'ru-RU' : 'en-US';
        nf = new Intl.NumberFormat(LOCALE);
        compactNf = new Intl.NumberFormat(LOCALE, { notation: 'compact', maximumFractionDigits: 1 });
        decNf = new Intl.NumberFormat(LOCALE, { maximumFractionDigits: 1 });
        pluralRules = new Intl.PluralRules(LOCALE);
        try { localStorage.setItem('tga_lang', lang); } catch (e) { /* приватный режим */ }
        applyStaticTexts();
        if (state.chat) {
            state.chat.name = chatTitle(state.chat.raw);
            for (const u of state.userById.values()) {
                if (u.name === prevDeleted) { u.name = t('deleted'); u.initials = initials(u.name); }
            }
            state.wrappedCache.clear();
            renderAll(true);
        } else if (state.exportData && !$('chat-picker').classList.contains('hidden')) {
            showChatPicker(false);
        }
    }

    $('lang-toggle').addEventListener('click', () => setLang(LANG === 'ru' ? 'en' : 'ru'));

    function currentTheme() {
        const th = document.documentElement.dataset.theme;
        if (th) return th;
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    $('theme-toggle').addEventListener('click', () => {
        const next = currentTheme() === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        try { localStorage.setItem('tga_theme', next); } catch (e) { /* ignore */ }
        charts.forEach((c) => c.request());
    });
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => charts.forEach((c) => c.request()));

    // ================================================================
    // Загрузка файла
    // ================================================================
    const landing = $('landing'), loading = $('loading'), dashboard = $('dashboard');
    const fileInput = $('file-input'), dropZone = $('drop-zone');

    function showScreen(name) {
        landing.classList.toggle('hidden', name !== 'landing');
        loading.classList.toggle('hidden', name !== 'loading');
        dashboard.classList.toggle('hidden', name !== 'dashboard');
        $('open-another-btn').classList.toggle('hidden', !(name === 'dashboard' || (name === 'landing' && state.exportData)));
        $('topbar-chat').classList.toggle('hidden', name !== 'dashboard');
        $('ai-widget').classList.toggle('hidden', name !== 'dashboard');
        if (name !== 'dashboard') hideTooltip();
    }

    let toastTimer = null;
    function toast(text, ok = false) {
        const el = $('toast');
        el.textContent = text;
        el.classList.toggle('ok', ok);
        el.classList.remove('hidden');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => el.classList.add('hidden'), 6000);
    }

    async function handleFile(file) {
        if (!file) return;
        if (!/\.json$/i.test(file.name) && file.type !== 'application/json') {
            toast(t('err.notJson'));
            return;
        }
        const mb = file.size / 1048576;
        showScreen('loading');
        $('loading-text').textContent = t('loading.read', {
            name: file.name,
            size: mb >= 1 ? t('size.mb', { n: decNf.format(mb) }) : t('size.kb', { n: Math.ceil(file.size / 1024) }),
        });
        await nextFrame();
        let data;
        try {
            const text = await file.text();
            $('loading-text').textContent = t('loading.parse');
            await nextFrame();
            data = JSON.parse(text);
        } catch (err) {
            showScreen(state.chat ? 'dashboard' : 'landing');
            toast(err instanceof SyntaxError ? t('err.broken', { msg: err.message }) : t('err.read', { msg: err.message }));
            return;
        } finally {
            fileInput.value = '';
        }

        const chats = findChats(data);
        if (!chats.length) {
            showScreen(state.chat ? 'dashboard' : 'landing');
            toast(t('err.noMessages'));
            return;
        }
        if (chats.length === 1) {
            state.exportData = null;
            $('chat-picker').classList.add('hidden');
            openChat(chats[0]);
        } else {
            state.exportData = chats;
            showChatPicker(true);
        }
    }

    function showChatPicker(scroll) {
        const chats = state.exportData;
        const picker = $('chat-picker');
        const search = $('chat-picker-search');
        const list = $('chat-picker-list');
        const sorted = [...chats].sort((a, b) => b.messages.length - a.messages.length);
        $('chat-picker-count').textContent = t('picker.count', { n: pn(chats.length, 'chat') });
        const render = () => {
            const q = search.value.trim().toLowerCase();
            const shown = sorted.filter((c) => !q || chatTitle(c).toLowerCase().includes(q));
            list.innerHTML = shown.length ? shown.map((c) => {
                const i = chats.indexOf(c);
                return `
                <button type="button" class="chat-row" data-i="${i}">
                    <span class="avatar avatar-sm" style="background:${USER_COLORS[i % USER_COLORS.length]}">${escapeHTML(initials(chatTitle(c)))}</span>
                    <span class="chat-row-name">${escapeHTML(chatTitle(c))}</span>
                    <span class="chat-row-meta">${escapeHTML(t('chatTypes')[c.type] || '')} · ${fmt(c.messages.length)}</span>
                </button>`;
            }).join('') : `<div class="empty">${t('picker.none')}</div>`;
        };
        search.oninput = render;
        list.onclick = (e) => {
            const row = e.target.closest('.chat-row');
            if (row) openChat(chats[+row.dataset.i]);
        };
        render();
        picker.classList.remove('hidden');
        showScreen('landing');
        if (scroll) picker.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    async function openChat(chat) {
        showScreen('loading');
        $('loading-text').textContent = t('loading.analyze', { n: pn(chat.messages.length, 'entry') });
        await nextFrame();
        let a;
        try {
            a = analyze(chat);
        } catch (err) {
            console.error(err);
            showScreen(state.chat ? 'dashboard' : 'landing');
            toast(t('err.analyze', { msg: err.message }));
            return;
        }
        if (!a.msgs.length) {
            showScreen(state.exportData ? 'landing' : (state.chat ? 'dashboard' : 'landing'));
            toast(t('err.emptyChat'));
            return;
        }

        const span = a.activeDays[a.activeDays.length - 1] - a.activeDays[0] + 1;
        Object.assign(state, {
            chat: { name: chatTitle(chat), type: chat.type, raw: { name: chat.name, type: chat.type } },
            a,
            msgs: a.msgs, users: a.users, userById: a.userById, activeDays: a.activeDays,
            series: buildSeries(a), sortedWords: null, wordsByUser: new Map(),
            wordLimit: 30, usersExpanded: false, emojiMode: 'text',
            granularity: span <= 180 ? 'day' : span <= 3 * 365 ? 'week' : 'month',
            trend: { terms: [], gran: span <= 60 ? 'day' : span <= 2 * 365 ? 'week' : 'month', data: [] },
            wrappedYear: null, wrappedCache: new Map(),
            viewer: { day: a.activeDays[a.activeDays.length - 1], scope: 'day', query: '', user: '' },
            aiHistory: [],
        });
        $('word-search').value = '';
        $('viewer-search').value = '';
        $('trend-input').value = '';

        showScreen('dashboard');
        window.scrollTo({ top: 0 });
        renderAll(false);
        // Сразу показываем тренд двух самых частых слов
        setTrend(getSortedWords('').slice(0, 2).map(([w]) => w));
    }

    // Отрисовка всего дашборда (keep = сохранить фильтры, например при смене языка)
    function renderAll(keep) {
        renderHeader();
        renderKpis();
        renderGranularity();
        updateActivityChart();
        renderTrendGranularity();
        if (keep) renderTrend(); else renderTrendSuggest();
        renderYears();
        renderHeatmap();
        renderUsers();
        renderReactions();
        renderWordControls(keep);
        renderWords();
        renderEmoji();
        renderMedia();
        renderWrapped();
        initViewer(keep);
        state.aiContext = buildAiContext();
        if (!keep || state.aiHistory.length === 0) resetAiChat();
        else renderSuggestions();
    }

    // ---------- Drag & drop ----------
    dropZone.addEventListener('click', () => fileInput.click());
    dropZone.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInput.click(); }
    });
    fileInput.addEventListener('change', () => handleFile(fileInput.files[0]));
    $('open-another-btn').addEventListener('click', () => fileInput.click());
    $('brand-link').addEventListener('click', (e) => {
        e.preventDefault();
        if (state.exportData) showChatPicker(true);
        else if (!dashboard.classList.contains('hidden')) window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    let dragDepth = 0;
    const hasFiles = (e) => e.dataTransfer && Array.from(e.dataTransfer.types || []).includes('Files');
    window.addEventListener('dragenter', (e) => {
        if (!hasFiles(e)) return;
        e.preventDefault();
        dragDepth++;
        if (landing.classList.contains('hidden')) $('drag-overlay').classList.remove('hidden');
        else dropZone.classList.add('dragover');
    });
    window.addEventListener('dragover', (e) => { if (hasFiles(e)) e.preventDefault(); });
    window.addEventListener('dragleave', () => {
        dragDepth = Math.max(0, dragDepth - 1);
        if (!dragDepth) { $('drag-overlay').classList.add('hidden'); dropZone.classList.remove('dragover'); }
    });
    window.addEventListener('drop', (e) => {
        if (!hasFiles(e)) return;
        e.preventDefault();
        dragDepth = 0;
        $('drag-overlay').classList.add('hidden');
        dropZone.classList.remove('dragover');
        if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
    });

    // ================================================================
    // Шапка и KPI
    // ================================================================
    function renderHeader() {
        const a = state.a;
        $('chat-name').textContent = state.chat.name;
        $('chat-meta').textContent = `${t('chatTypes')[state.chat.type] || t('chat')} · ${formatDayShort(a.activeDays[0])} — ${formatDayShort(a.activeDays[a.activeDays.length - 1])}`;
        document.title = `${state.chat.name} — Telegram Analytics`;
    }

    function renderKpis() {
        const a = state.a;
        const first = a.activeDays[0], last = a.activeDays[a.activeDays.length - 1];
        const span = last - first + 1;
        const total = a.totalMsg + a.totalStk;
        const years = span / 365.25;
        const periodText = years >= 1 ? `${decNf.format(years)} ${pl(+years.toFixed(1), 'year')}` : pn(span, 'day');
        const tiles = [
            { label: t('kpi.messages'), dot: 'var(--msg)', value: fmt(a.totalMsg), sub: t('kpi.perDay', { n: fmt(a.totalMsg / span) }) },
            { label: t('kpi.stickers'), dot: 'var(--stk)', value: fmt(a.totalStk), sub: total ? t('kpi.ofAll', { n: Math.round((a.totalStk / total) * 100) }) : '' },
            { label: t('kpi.users'), value: fmt(a.users.length), sub: t('chatTypes')[state.chat.type] || '' },
            { label: t('kpi.period'), value: periodText, sub: t('kpi.since', { date: formatDayShort(first) }) },
            { label: t('kpi.activeDays'), value: fmt(a.activeDays.length), sub: t('kpi.activeOf', { p: Math.round((a.activeDays.length / span) * 100), n: fmt(span) }) },
            { label: t('kpi.record'), value: fmt(a.bestDayCount), sub: a.bestDay != null ? formatDayShort(a.bestDay) : '', day: a.bestDay },
            { label: t('kpi.streak'), value: pn(a.bestStreak, 'day'), sub: a.bestStreakEnd != null ? t('kpi.until', { date: formatDayShort(a.bestStreakEnd) }) : '' },
        ];
        if (a.reactions.total > 0) {
            const top = [...a.reactions.byEmoji.entries()].sort((x, y) => y[1] - x[1])[0];
            tiles.push({ label: t('kpi.reactions'), value: fmt(a.reactions.total), sub: t('kpi.reactionsSub', { e: top[0] }), scroll: 'reactions-card' });
        }
        if (a.voiceSec > 0) {
            tiles.push({ label: t('kpi.voice'), value: fmt(a.kindsTotal.voice || 0), sub: t('kpi.voiceTotal', { d: formatDuration(a.voiceSec) }) });
        }
        $('kpis').innerHTML = tiles.map((k) => `
            <div class="kpi"${k.day != null ? ` data-day="${k.day}" style="cursor:pointer" title="${escapeHTML(t('kpi.openDay'))}"` : ''}${k.scroll ? ` data-scroll="${k.scroll}" style="cursor:pointer"` : ''}>
                <div class="kpi-label">${k.dot ? `<span class="kpi-dot" style="background:${k.dot}"></span>` : ''}${escapeHTML(k.label)}</div>
                <div class="kpi-value" title="${escapeHTML(k.value)}">${escapeHTML(k.value)}</div>
                <div class="kpi-sub">${escapeHTML(k.sub)}</div>
            </div>`).join('');
    }
    $('kpis').addEventListener('click', (e) => {
        const tile = e.target.closest('[data-day]');
        if (tile) { openDay(+tile.dataset.day, true); return; }
        const s = e.target.closest('[data-scroll]');
        if (s) $(s.dataset.scroll).scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // ================================================================
    // График активности
    // ================================================================
    function bucketTopUsers(b) {
        const counts = new Map();
        for (let d = b.start; d <= b.end; d++) {
            const du = state.a.dayUsers.get(d);
            if (du) for (const [uid, c] of du) counts.set(uid, (counts.get(uid) || 0) + c);
        }
        return [...counts.entries()].sort((x, y) => y[1] - x[1]);
    }

    const activityChart = new TimeChart($('activity-chart'), $('chart-wrap'), {
        tooltipHTML(i) {
            const b = state.series[state.granularity][i];
            const top = bucketTopUsers(b);
            let html = `<div class="tt-title">${escapeHTML(bucketTitle(b, state.granularity))}</div>
                <div class="tt-row"><span class="swatch swatch-msg"></span>${t('series.messages')}<span class="tt-val">${fmt(b.messages)}</span></div>
                <div class="tt-row"><span class="swatch swatch-stk"></span>${t('series.stickers')}<span class="tt-val">${fmt(b.stickers)}</span></div>`;
            if (top.length && state.users.length > 1) {
                html += '<div class="tt-sep"></div>';
                html += top.slice(0, 3).map(([uid, c]) => {
                    const u = state.userById.get(uid);
                    return `<div class="tt-row tt-users"><span class="kpi-dot" style="background:${u.color}"></span>${escapeHTML(u.name)}<span class="tt-val">${fmt(c)}</span></div>`;
                }).join('');
                if (top.length > 3) html += `<div class="tt-hint">${t('tt.more', { n: top.length - 3 })}</div>`;
            }
            if (top.length) html += `<div class="tt-hint">${t('tt.click')}</div>`;
            return html;
        },
        isClickable(i) {
            const b = state.series[state.granularity][i];
            return b.messages + b.stickers > 0;
        },
        onClick(i) {
            const b = state.series[state.granularity][i];
            const day = firstActiveDayIn(b.start, b.end);
            if (day != null) openDay(day, true);
        },
    });

    function updateActivityChart() {
        const buckets = state.series[state.granularity];
        const series = [];
        if (state.visible.messages) series.push({ color: '--msg', values: buckets.map((b) => b.messages) });
        if (state.visible.stickers) series.push({ color: '--stk', values: buckets.map((b) => b.stickers) });
        activityChart.set({ buckets, granularity: state.granularity, series });
    }

    function renderGranularity() {
        document.querySelectorAll('#granularity button').forEach((b) => b.classList.toggle('active', b.dataset.g === state.granularity));
        document.querySelectorAll('#chart-legend .legend-item').forEach((b) => b.classList.toggle('active', state.visible[b.dataset.series]));
    }
    $('granularity').addEventListener('click', (e) => {
        const b = e.target.closest('button[data-g]');
        if (!b) return;
        state.granularity = b.dataset.g;
        renderGranularity();
        updateActivityChart();
    });
    $('chart-legend').addEventListener('click', (e) => {
        const b = e.target.closest('[data-series]');
        if (!b) return;
        const key = b.dataset.series;
        const other = key === 'messages' ? 'stickers' : 'messages';
        state.visible[key] = !state.visible[key];
        if (!state.visible[key] && !state.visible[other]) state.visible[other] = true;
        renderGranularity();
        updateActivityChart();
    });

    // ================================================================
    // Тренд слова
    // ================================================================
    function termRegex(term) {
        let s = term.trim().toLowerCase().replace(/ё/g, 'е');
        const prefix = s.endsWith('*');
        s = s.replace(/\*+$/, '').trim();
        if (!s) return null;
        const body = s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/е/g, '[её]').replace(/\s+/g, '\\s+');
        return new RegExp(`(?<![\\p{L}\\p{N}])${body}${prefix ? '[\\p{L}\\p{N}]*' : ''}(?![\\p{L}\\p{N}])`, 'giu');
    }

    function parseTerms(input) {
        const seen = new Set();
        return input.split(',').map((s) => s.trim()).filter((s) => {
            const k = s.toLowerCase();
            if (!s || seen.has(k)) return false;
            seen.add(k);
            return true;
        }).slice(0, 4);
    }

    function computeTrend(terms) {
        const items = terms.map((term, k) => ({
            term, color: TREND_COLORS[k], re: termRegex(term),
            daily: new Map(), byUser: new Map(), total: 0, first: -1,
        })).filter((x) => x.re);
        if (!items.length) return [];
        const msgs = state.msgs;
        for (let i = 0; i < msgs.length; i++) {
            const m = msgs[i];
            if (!m.text || m.kind === 'sticker') continue;
            for (const it of items) {
                const found = m.text.match(it.re);
                if (!found) continue;
                const c = found.length;
                it.total += c;
                it.daily.set(m.day, (it.daily.get(m.day) || 0) + c);
                it.byUser.set(m.author, (it.byUser.get(m.author) || 0) + c);
                if (it.first < 0) it.first = i;
            }
        }
        for (const it of items) it.re = null;
        return items;
    }

    function setTrend(terms) {
        state.trend.terms = terms;
        state.trend.data = computeTrend(terms);
        $('trend-input').value = terms.join(', ');
        renderTrend();
    }

    function trendDayIn(b) {
        for (let d = b.start; d <= b.end; d++) {
            for (const it of state.trend.data) if (it.daily.get(d)) return { day: d, term: it.term };
        }
        return null;
    }

    const trendChart = new TimeChart($('trend-chart'), $('trend-wrap'), {
        tooltipHTML(i) {
            const b = state.series[state.trend.gran][i];
            let html = `<div class="tt-title">${escapeHTML(bucketTitle(b, state.trend.gran))}</div>`;
            for (const it of state.trend.data) {
                let v = 0;
                for (let d = b.start; d <= b.end; d++) v += it.daily.get(d) || 0;
                html += `<div class="tt-row"><span class="kpi-dot" style="background:${it.color}"></span>${escapeHTML(it.term)}<span class="tt-val">${fmt(v)}</span></div>`;
            }
            if (trendDayIn(b)) html += `<div class="tt-hint">${t('tt.click')}</div>`;
            return html;
        },
        isClickable(i) { return !!trendDayIn(state.series[state.trend.gran][i]); },
        onClick(i) {
            const hit = trendDayIn(state.series[state.trend.gran][i]);
            if (hit) openDay(hit.day, true, hit.term.replace(/\*+$/, ''));
        },
    });

    function renderTrendGranularity() {
        document.querySelectorAll('#trend-granularity button').forEach((b) => b.classList.toggle('active', b.dataset.g === state.trend.gran));
    }

    function renderTrendSuggest() {
        const top = getSortedWords('').slice(0, 6).map(([w]) => w);
        $('trend-suggest').innerHTML = top.length
            ? `<span>${t('trend.try')}</span>` + top.map((w) => `<button type="button" data-w="${escapeHTML(w)}">${escapeHTML(w)}</button>`).join('')
            : '';
    }

    function renderTrend() {
        renderTrendSuggest();
        const data = state.trend.data;
        const buckets = state.series[state.trend.gran];
        const empty = $('trend-empty');
        if (!data.length || !data.some((it) => it.total > 0)) {
            empty.textContent = data.length ? t('trend.zero') : t('trend.empty');
            empty.classList.remove('hidden');
            trendChart.set(null);
        } else {
            empty.classList.add('hidden');
            trendChart.set({
                buckets, granularity: state.trend.gran, fill: data.length === 1,
                series: data.map((it) => ({ color: it.color, values: sumBuckets(buckets, it.daily) })),
            });
        }
        $('trend-summary').innerHTML = data.map((it) => {
            if (!it.total) {
                return `<div class="trend-item"><div class="trend-item-head"><span class="kpi-dot" style="background:${it.color}"></span><span class="trend-item-word">${escapeHTML(it.term)}</span><span class="trend-item-total muted">${t('trend.notFound')}</span></div></div>`;
            }
            const users = [...it.byUser.entries()].sort((x, y) => y[1] - x[1]);
            const chips = users.slice(0, 4).map(([uid, c]) => {
                const u = state.userById.get(uid);
                return `<span class="chip">${escapeHTML(u.name)}: <b>${fmt(c)}</b></span>`;
            }).join('');
            const fm = state.msgs[it.first];
            return `
                <div class="trend-item">
                    <div class="trend-item-head">
                        <span class="kpi-dot" style="background:${it.color}"></span>
                        <span class="trend-item-word">${escapeHTML(it.term)}</span>
                        <span class="trend-item-total">${pn(it.total, 'time')}</span>
                    </div>
                    <div class="chips">${chips}</div>
                    <button type="button" class="trend-item-first" data-goto="${it.first}">${escapeHTML(t('trend.first', { date: formatDayShort(fm.day), name: state.userById.get(fm.author).name }))}</button>
                </div>`;
        }).join('');
    }

    $('trend-form').addEventListener('submit', (e) => {
        e.preventDefault();
        setTrend(parseTerms($('trend-input').value));
    });
    $('trend-suggest').addEventListener('click', (e) => {
        const b = e.target.closest('button[data-w]');
        if (!b) return;
        const terms = parseTerms($('trend-input').value);
        if (!terms.includes(b.dataset.w)) terms.push(b.dataset.w);
        setTrend(terms.slice(-4));
    });
    $('trend-granularity').addEventListener('click', (e) => {
        const b = e.target.closest('button[data-g]');
        if (!b) return;
        state.trend.gran = b.dataset.g;
        renderTrendGranularity();
        renderTrend();
    });
    $('trend-summary').addEventListener('click', (e) => {
        const b = e.target.closest('[data-goto]');
        if (b) goToMessage(+b.dataset.goto, true);
    });

    // ================================================================
    // Годы
    // ================================================================
    function renderYears() {
        const a = state.a;
        const years = [...a.years.keys()].sort();
        const maxMsg = Math.max(1, ...years.map((y) => a.years.get(y).messages));
        const maxStk = Math.max(1, ...years.map((y) => a.years.get(y).stickers));
        $('years').innerHTML = years.map((y, i) => {
            const d = a.years.get(y);
            let delta = '';
            if (i > 0) {
                const p = a.years.get(years[i - 1]).messages;
                if (p > 0) {
                    const pct = Math.round(((d.messages - p) / p) * 100);
                    if (pct !== 0) delta = `<span class="delta ${pct > 0 ? 'up' : 'down'}" title="${escapeHTML(t('years.vs', { y: years[i - 1] }))}">${pct > 0 ? '+' : ''}${fmt(pct)}%</span>`;
                }
            }
            const topUser = [...d.users.entries()].sort((x, z) => z[1] - x[1])[0];
            const tu = topUser && state.users.length > 1 ? state.userById.get(topUser[0]) : null;
            return `
                <div class="year-row" title="${tu ? escapeHTML(t('years.top', { name: tu.name })) : ''}">
                    <div class="year-label">${y}</div>
                    <div class="year-bars">
                        <div class="bar bar-msg"><span style="width:${(d.messages / maxMsg) * 100}%"></span></div>
                        <div class="bar bar-stk"><span style="width:${(d.stickers / maxStk) * 100}%"></span></div>
                    </div>
                    <div class="year-nums">
                        <div><b>${fmt(d.messages)}</b>${delta}</div>
                        <div class="muted">${t('years.stk', { n: fmt(d.stickers) })}</div>
                    </div>
                </div>`;
        }).join('');
    }

    // ================================================================
    // Тепловая карта «день недели × час»
    // ================================================================
    function renderHeatmap() {
        const a = state.a;
        let max = 0, total = 0, best = [0, 0];
        const byDay = new Array(7).fill(0), byHour = new Array(24).fill(0);
        a.heat.forEach((row, d) => row.forEach((v, h) => {
            total += v; byDay[d] += v; byHour[h] += v;
            if (v > max) { max = v; best = [d, h]; }
        }));
        let html = '<div></div>';
        for (let h = 0; h < 24; h++) html += `<div class="heat-hour">${h % 3 === 0 ? h : ''}</div>`;
        a.heat.forEach((row, d) => {
            const wd = weekdayShort(d);
            html += `<div class="heat-day">${escapeHTML(wd)}</div>`;
            row.forEach((v, h) => {
                const pct = max ? Math.round(Math.pow(v / max, 0.7) * 100) : 0;
                const bg = v ? `color-mix(in srgb, var(--accent) ${Math.max(8, pct)}%, var(--heat-0))` : 'var(--heat-0)';
                html += `<div class="heat-cell" style="background:${bg}" title="${escapeHTML(wd)}, ${pad2(h)}:00–${pad2((h + 1) % 24)}:00 — ${escapeHTML(pn(v, 'message'))}"></div>`;
            });
        });
        html += `<div class="heat-legend"><span>${t('heat.less')}</span>${[0, 25, 50, 75, 100].map((p) => `<span class="heat-cell" style="background:${p ? `color-mix(in srgb, var(--accent) ${p}%, var(--heat-0))` : 'var(--heat-0)'}"></span>`).join('')}<span>${t('heat.more')}</span></div>`;
        $('heatmap').innerHTML = html;

        const busiestDay = byDay.indexOf(Math.max(...byDay));
        const night = byHour.slice(0, 6).reduce((s, v) => s + v, 0);
        $('rhythm-sub').textContent = total
            ? t('rhythm.sub', { day: weekdayLong(best[0]), h: best[1], wd: weekdayLong(busiestDay), p: Math.round((night / total) * 100) })
            : '';
    }

    // ================================================================
    // Участники
    // ================================================================
    function renderUsers() {
        const total = state.users.reduce((s, u) => s + u.total, 0) || 1;
        const max = state.users[0] ? state.users[0].total : 1;
        const list = state.users.slice(0, state.usersExpanded ? state.users.length : 12);
        const medals = ['🥇', '🥈', '🥉'];
        const multi = state.users.length > 1;

        $('users').innerHTML = list.map((u) => {
            const media = (u.kinds.photo || 0) + (u.kinds.video || 0) + (u.kinds.gif || 0) + (u.kinds.file || 0);
            const chips = [
                `<span class="chip">${t('chip.msgs')} <b>${fmt(u.messages)}</b></span>`,
                `<span class="chip">${t('chip.stk')} <b>${fmt(u.stickers)}</b></span>`,
            ];
            if (u.textMsgs) chips.push(`<span class="chip" title="${escapeHTML(t('chip.lenTitle'))}">${t('chip.len', { n: fmt(u.avgLen) })}</span>`);
            if (media) chips.push(`<span class="chip">${t('chip.media')} <b>${fmt(media)}</b></span>`);
            if (u.kinds.voice) chips.push(`<span class="chip">🎤 <b>${fmt(u.kinds.voice)}</b> · ${escapeHTML(formatDuration(u.voiceSec))}</span>`);
            if (u.kinds.round) chips.push(`<span class="chip">⏺️ <b>${fmt(u.kinds.round)}</b></span>`);
            chips.push(`<span class="chip">${t('chip.days')} <b>${fmt(u.days)}</b></span>`);
            if (multi) chips.push(`<span class="chip" title="${escapeHTML(t('chip.startsTitle'))}">${t('chip.starts')} <b>${fmt(u.starts)}</b></span>`);
            if (multi && u.medianReply != null) chips.push(`<span class="chip" title="${escapeHTML(t('chip.replyTitle'))}">${t('chip.reply', { d: escapeHTML(formatDuration(u.medianReply)) })}</span>`);
            if (u.rReceived) chips.push(`<span class="chip">${t('chip.reacts')} <b>${fmt(u.rReceived)}</b></span>`);
            if (u.topEmoji.length) chips.push(`<span class="chip" title="${escapeHTML(t('chip.emojiTitle'))}">${u.topEmoji.slice(0, 3).map(([e]) => escapeHTML(e)).join(' ')}</span>`);
            const share = (u.total / total) * 100;
            return `
                <div class="user-card">
                    <div class="user-top">
                        <span class="avatar" style="background:${u.color}">${escapeHTML(u.initials)}</span>
                        <div style="min-width:0">
                            <div class="user-name" title="${escapeHTML(u.name)}">${u.rank < 3 && multi ? medals[u.rank] + ' ' : ''}${escapeHTML(u.name)}</div>
                            <div class="user-rank">${escapeHTML(t('users.share', { rank: u.rank + 1, p: share < 1 ? decNf.format(share) : Math.round(share), date: formatDayShort(u.first) }))}</div>
                        </div>
                        <div class="user-total"><b>${fmt(u.total)}</b><div>${t('users.total')}</div></div>
                    </div>
                    <div class="user-stack" title="${escapeHTML(t('users.stack', { m: fmt(u.messages), s: fmt(u.stickers) }))}">
                        <span style="width:${(u.messages / max) * 100}%; background: var(--msg)"></span>
                        <span style="width:${(u.stickers / max) * 100}%; background: var(--stk)"></span>
                    </div>
                    <div class="chips">${chips.join('')}</div>
                </div>`;
        }).join('');

        $('users-sub').textContent = pn(state.users.length, 'participant');
        const more = $('users-more');
        more.classList.toggle('hidden', state.users.length <= 12);
        more.textContent = state.usersExpanded ? t('users.less') : t('users.more', { n: fmt(state.users.length) });
    }
    $('users-more').addEventListener('click', () => {
        state.usersExpanded = !state.usersExpanded;
        renderUsers();
    });

    // ================================================================
    // Реакции
    // ================================================================
    function reactChips(rx) {
        return rx.map((r) => `<span class="react-chip">${escapeHTML(r.e)} ${fmt(r.c)}</span>`).join('');
    }

    function renderReactions() {
        const r = state.a.reactions;
        const box = $('reactions');
        if (!r.total) {
            $('reactions-sub').textContent = '';
            box.innerHTML = `<div class="empty" style="grid-column:1/-1">${t('react.none')}</div>`;
            return;
        }
        $('reactions-sub').textContent = t('react.summary', { r: fmt(r.total), m: fmt(r.msgs) });

        const top = [...r.byEmoji.entries()].sort((x, y) => y[1] - x[1]).slice(0, 12);
        const special = top.filter(([e]) => e === CUSTOM_REACTION || e === PAID_REACTION)
            .map(([e]) => `${e} ${e === CUSTOM_REACTION ? t('react.custom') : t('react.paid')}`);
        const people = [...state.userById.values()].filter((u) => u.rGiven || u.rReceived)
            .sort((x, y) => (y.rGiven + y.rReceived) - (x.rGiven + x.rReceived)).slice(0, 8);
        const pairs = [...r.pairs.entries()].sort((x, y) => y[1] - x[1]).slice(0, 6);
        const avatar = (u) => `<span class="avatar avatar-sm" style="background:${u.color}">${escapeHTML(u.initials)}</span>`;

        const pairsHTML = pairs.map(([k, c]) => {
            const [from, to] = k.split('\u0000');
            const ua = state.userById.get(from), ub = state.userById.get(to);
            return `<div class="react-pair">${avatar(ua)}<span class="nm">${escapeHTML(ua.name)}</span>→${avatar(ub)}<span class="nm">${escapeHTML(ub.name)}</span><span class="n">${fmt(c)}</span></div>`;
        }).join('');

        box.innerHTML = `
            <div>
                <h3>${t('react.top')}</h3>
                <div class="emoji-grid">${top.map(([e, c]) => `<div class="emoji-item" title="${fmt(c)}"><span class="emoji-char">${escapeHTML(e)}</span><span class="emoji-count">${fmtCompact(c)}</span></div>`).join('')}</div>
                ${special.length ? `<p class="react-note">${escapeHTML(special.join(' · '))}</p>` : ''}
            </div>
            <div>
                <h3>${t('react.people')}</h3>
                <div class="react-people">${people.map((u) => `
                    <div class="react-person">
                        ${avatar(u)}
                        <span class="react-person-name" title="${escapeHTML(u.name)}">${escapeHTML(u.name)}</span>
                        <span class="react-person-stats">${escapeHTML(t('react.given', { n: fmt(u.rGiven) }))}${u.favReaction ? ' ' + escapeHTML(u.favReaction[0]) : ''} · ${escapeHTML(t('react.received', { n: fmt(u.rReceived) }))}</span>
                    </div>`).join('')}
                </div>
                ${pairs.length ? `<h3 style="margin-top:1rem">${t('react.pairs')}</h3><div class="react-pairs">${pairsHTML}</div><p class="react-note">${t('react.note')}</p>` : ''}
            </div>
            <div>
                <h3>${t('react.best')}</h3>
                <div class="react-top">${r.top.map((idx) => {
                    const m = state.msgs[idx];
                    const u = state.userById.get(m.author);
                    return `
                        <button type="button" class="react-msg" data-goto="${idx}">
                            <div class="react-msg-head"><b style="color:${u.color}">${escapeHTML(u.name)}</b><span>${escapeHTML(formatDayShort(m.day))}</span></div>
                            <div class="react-msg-text">${escapeHTML(snippet(m))}</div>
                            <div class="reacts">${reactChips(m.rx)}</div>
                        </button>`;
                }).join('')}</div>
            </div>`;
    }
    $('reactions').addEventListener('click', (e) => {
        const b = e.target.closest('[data-goto]');
        if (b) goToMessage(+b.dataset.goto, true);
    });

    // ================================================================
    // Слова
    // ================================================================
    function userOptions(allLabel) {
        return `<option value="">${escapeHTML(allLabel)}</option>` + state.users.map((u) => `<option value="${escapeHTML(u.id)}">${escapeHTML(u.name)} (${fmt(u.total)})</option>`).join('');
    }

    function renderWordControls(keep) {
        const sel = $('word-user');
        const v = keep ? sel.value : '';
        sel.innerHTML = userOptions(t('words.all'));
        sel.value = v;
        sel.classList.toggle('hidden', state.users.length < 2);
    }

    function getSortedWords(uid) {
        if (!uid) {
            if (!state.sortedWords) state.sortedWords = [...state.a.words.entries()].sort((a, b) => b[1].t - a[1].t);
            return state.sortedWords;
        }
        if (!state.wordsByUser.has(uid)) {
            const list = [];
            for (const [w, rec] of state.a.words) if (rec.u[uid]) list.push([w, rec]);
            list.sort((a, b) => b[1].u[uid] - a[1].u[uid]);
            state.wordsByUser.set(uid, list);
        }
        return state.wordsByUser.get(uid);
    }

    function renderWords() {
        const uid = $('word-user').value;
        const q = $('word-search').value.trim().toLowerCase().replace(/ё/g, 'е');
        let list = getSortedWords(uid);
        const countOf = (rec) => (uid ? rec.u[uid] : rec.t);
        const rankOf = new Map();
        if (q) {
            list.forEach(([w], i) => { if (w.includes(q)) rankOf.set(w, i + 1); });
            list = list.filter(([w]) => rankOf.has(w));
        }
        const shown = list.slice(0, state.wordLimit);
        const max = shown.length ? countOf(list[0][1]) : 1;
        const topUsers = state.users.slice(0, 6);

        $('words').innerHTML = shown.length ? shown.map(([w, rec], i) => {
            const count = countOf(rec);
            let bar;
            if (uid) {
                bar = `<span style="width:${(count / max) * 100}%;background:${state.userById.get(uid).color}"></span>`;
            } else {
                let rest = rec.t;
                bar = topUsers.map((u) => {
                    const c = rec.u[u.id] || 0;
                    rest -= c;
                    return c ? `<span style="width:${(c / max) * 100}%;background:${u.color}"></span>` : '';
                }).join('') + (rest > 0 ? `<span style="width:${(rest / max) * 100}%;background:${OTHER_COLOR}"></span>` : '');
            }
            const breakdown = Object.entries(rec.u).sort((a, b) => b[1] - a[1]).slice(0, 8)
                .map(([id, c]) => `${state.userById.get(id).name}: ${fmt(c)}`).join('\n');
            return `
                <div class="word-row" data-w="${escapeHTML(w)}" title="${escapeHTML(breakdown + '\n\n' + t('trend.wordTitle'))}">
                    <span class="word-idx">${q ? rankOf.get(w) : i + 1}</span>
                    <span class="word-text">${escapeHTML(w)}</span>
                    <div class="word-bar">${bar}</div>
                    <span class="word-count">${fmt(count)}</span>
                </div>`;
        }).join('') : `<div class="empty">${q ? t('words.notFound') : t('words.none')}</div>`;

        const more = $('words-more');
        more.classList.toggle('hidden', list.length <= state.wordLimit);
        more.textContent = t('words.more', { n: fmt(list.length - state.wordLimit) });
    }

    let wordSearchTimer = null;
    $('word-search').addEventListener('input', () => {
        clearTimeout(wordSearchTimer);
        wordSearchTimer = setTimeout(() => { state.wordLimit = 30; renderWords(); }, 120);
    });
    $('word-user').addEventListener('change', () => { state.wordLimit = 30; renderWords(); });
    $('words-more').addEventListener('click', () => { state.wordLimit += 50; renderWords(); });
    $('words').addEventListener('click', (e) => {
        const row = e.target.closest('.word-row');
        if (!row) return;
        setTrend([row.dataset.w]);
        $('trend-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // ================================================================
    // Эмодзи и типы сообщений
    // ================================================================
    function renderEmoji() {
        const a = state.a, mode = state.emojiMode;
        document.querySelectorAll('#emoji-mode [data-m]').forEach((b) => b.classList.toggle('active', b.dataset.m === mode));
        const source = mode === 'text' ? a.emoji : a.stickerEmoji;
        const top = [...source.entries()].sort((x, y) => y[1] - x[1]).slice(0, 24);
        $('emoji').innerHTML = top.length
            ? top.map(([e, c]) => `<div class="emoji-item" title="${fmt(c)}"><span class="emoji-char">${escapeHTML(e)}</span><span class="emoji-count">${fmtCompact(c)}</span></div>`).join('')
            : `<div class="empty" style="grid-column:1/-1">${mode === 'text' ? t('emoji.noneText') : t('emoji.noneStk')}</div>`;
    }
    $('emoji-mode').addEventListener('click', (e) => {
        const b = e.target.closest('button[data-m]');
        if (!b || !state.a) return;
        state.emojiMode = b.dataset.m;
        renderEmoji();
    });

    function renderMedia() {
        const a = state.a;
        const rows = Object.keys(KIND_ICONS).filter((k) => a.kindsTotal[k]).map((k) => [k, a.kindsTotal[k]]).sort((x, y) => y[1] - x[1]);
        const max = rows.length ? rows[0][1] : 1;
        $('media').innerHTML = rows.map(([k, v]) => `
            <div class="media-row">
                <span class="media-icon">${KIND_ICONS[k]}</span>
                <span>${t('kind.' + k)}</span>
                <span class="media-val">${fmt(v)}</span>
                <div class="bar"><span style="width:${(v / max) * 100}%"></span></div>
            </div>`).join('');
    }

    // ================================================================
    // Итоги года
    // ================================================================
    function computeYear(y) {
        if (state.wrappedCache.has(y)) return state.wrappedCache.get(y);
        const a = state.a;
        const startN = dayNum(`${y}-01-01`), endN = dayNum(`${+y + 1}-01-01`) - 1;
        const days = a.activeDays.slice(lowerBound(a.activeDays, startN), lowerBound(a.activeDays, endN + 1));
        if (!days.length) return null;
        const from = a.dayRange.get(days[0])[0], to = a.dayRange.get(days[days.length - 1])[1];

        let messages = 0, stickers = 0, voiceSec = 0;
        const users = new Map(), words = new Map(), emoji = new Map(), rx = new Map();
        const hours = new Array(24).fill(0), months = new Array(12).fill(0);
        for (let i = from; i < to; i++) {
            const m = a.msgs[i];
            users.set(m.author, (users.get(m.author) || 0) + 1);
            hours[+m.date.slice(11, 13) || 0]++;
            months[+m.date.slice(5, 7) - 1]++;
            if (m.kind === 'sticker') stickers++;
            else messages++;
            if (m.kind === 'voice') voiceSec += m.dur;
            if (m.text && m.kind !== 'sticker') {
                for (const w of tokenize(m.text)) words.set(w, (words.get(w) || 0) + 1);
                const em = m.text.match(EMOJI_RE);
                if (em) for (const e of em) emoji.set(e, (emoji.get(e) || 0) + 1);
            }
            if (m.rx) for (const r of m.rx) rx.set(r.e, (rx.get(r.e) || 0) + r.c);
        }
        const top = (map) => [...map.entries()].sort((p, q) => q[1] - p[1])[0] || null;
        let bestDay = days[0], bestCount = 0, streak = 0, bestStreak = 0;
        days.forEach((d, i) => {
            const [s, e] = a.dayRange.get(d);
            if (e - s > bestCount) { bestCount = e - s; bestDay = d; }
            streak = i > 0 && d === days[i - 1] + 1 ? streak + 1 : 1;
            bestStreak = Math.max(bestStreak, streak);
        });
        const prevYear = a.years.get(String(+y - 1));
        const res = {
            year: y, messages, stickers, voiceSec,
            activeDays: days.length,
            daysInYear: endN - startN + 1,
            bestDay, bestCount, bestStreak,
            peakHour: hours.indexOf(Math.max(...hours)),
            bestMonth: months.indexOf(Math.max(...months)),
            bestMonthCount: Math.max(...months),
            word: top(words), emoji: top(emoji), reaction: top(rx),
            users: [...users.entries()].sort((p, q) => q[1] - p[1]),
            total: messages + stickers,
            vsPrev: prevYear && prevYear.messages > 0 ? Math.round(((messages - prevYear.messages) / prevYear.messages) * 100) : null,
        };
        state.wrappedCache.set(y, res);
        return res;
    }

    function wrappedTiles(s) {
        const tiles = [
            { label: t('w.days'), value: fmt(s.activeDays), sub: t('w.ofDays', { n: fmt(s.daysInYear) }) },
            { label: t('w.hotDay'), value: formatDayNoYear(s.bestDay), sub: pn(s.bestCount, 'message') },
        ];
        if (s.word) tiles.push({ label: t('w.word'), value: quote(s.word[0]), sub: pn(s.word[1], 'time') });
        if (s.emoji) tiles.push({ label: t('w.emoji'), value: s.emoji[0], sub: pn(s.emoji[1], 'time'), emoji: true });
        if (s.reaction) tiles.push({ label: t('w.reaction'), value: s.reaction[0], sub: pn(s.reaction[1], 'time'), emoji: true });
        tiles.push({ label: t('w.peak'), value: `${pad2(s.peakHour)}:00`, sub: t('w.peakSub') });
        tiles.push({ label: t('w.month'), value: monthName(s.bestMonth), sub: pn(s.bestMonthCount, 'message') });
        tiles.push({ label: t('w.streak'), value: fmt(s.bestStreak), sub: t('w.streakSub') });
        return tiles.slice(0, 6);
    }

    const wrappedCanvas = $('wrapped-canvas');

    function fitText(c, text, maxW) {
        if (c.measureText(text).width <= maxW) return text;
        const chars = Array.from(text);
        while (chars.length > 1 && c.measureText(chars.join('') + '…').width > maxW) chars.pop();
        return chars.join('') + '…';
    }

    function drawWrapped(s) {
        const W = 1080, H = 1350, P = 72;
        const c = wrappedCanvas.getContext('2d');
        const FONT = 'Inter, system-ui, sans-serif';
        const EMOJI_FONT = '"Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", Inter, sans-serif';
        const pathRound = (x, y, w, h, r) => {
            c.beginPath();
            if (c.roundRect) c.roundRect(x, y, w, h, r); else c.rect(x, y, w, h);
        };
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.clearRect(0, 0, W, H);

        // Фон
        const g = c.createLinearGradient(0, 0, W, H);
        g.addColorStop(0, '#16257a');
        g.addColorStop(0.5, '#4a26a6');
        g.addColorStop(1, '#b3266e');
        c.fillStyle = g;
        c.fillRect(0, 0, W, H);
        const blob = (x, y, r, color) => {
            const rg = c.createRadialGradient(x, y, 0, x, y, r);
            rg.addColorStop(0, color);
            rg.addColorStop(1, 'rgba(0,0,0,0)');
            c.fillStyle = rg;
            c.fillRect(x - r, y - r, r * 2, r * 2);
        };
        blob(920, 160, 420, 'rgba(76,157,255,0.45)');
        blob(80, 1220, 480, 'rgba(255,107,154,0.35)');
        blob(600, 700, 380, 'rgba(255,255,255,0.06)');

        c.textBaseline = 'alphabetic';
        c.textAlign = 'left';

        // Шапка
        c.fillStyle = 'rgba(255,255,255,0.72)';
        c.font = `700 28px ${FONT}`;
        c.fillText('TELEGRAM WRAPPED', P, 112);
        c.textAlign = 'right';
        c.font = `600 28px ${FONT}`;
        c.fillText(fitText(c, state.chat.name, 520), W - P, 112);
        c.textAlign = 'left';

        // Год
        c.fillStyle = '#ffffff';
        c.font = `800 210px ${FONT}`;
        c.fillText(String(s.year), P - 10, 318);

        // Главное число
        c.font = `800 112px ${FONT}`;
        const big = fmt(s.messages);
        c.fillText(big, P, 456);
        const bw = c.measureText(big).width;
        c.font = `600 40px ${FONT}`;
        c.fillStyle = 'rgba(255,255,255,0.85)';
        c.fillText(fitText(c, pl(s.messages, 'message'), W - P * 2 - bw - 24), P + bw + 22, 456);
        c.font = `500 32px ${FONT}`;
        c.fillStyle = 'rgba(255,255,255,0.75)';
        let line = t('w.andStickers', { n: pn(s.stickers, 'sticker') });
        if (s.vsPrev !== null && s.vsPrev !== 0) line += ` · ${t('w.vs', { p: (s.vsPrev > 0 ? '+' : '') + fmt(s.vsPrev) + '%', y: +s.year - 1 })}`;
        c.fillText(fitText(c, line, W - P * 2), P, 512);

        // Плитки 2×3
        const tiles = wrappedTiles(s);
        const gap = 24, tw = (W - P * 2 - gap) / 2, th = 160, top0 = 566;
        tiles.forEach((tile, i) => {
            const x = P + (i % 2) * (tw + gap), y = top0 + Math.floor(i / 2) * (th + gap);
            c.fillStyle = 'rgba(255,255,255,0.12)';
            pathRound(x, y, tw, th, 28);
            c.fill();
            c.fillStyle = 'rgba(255,255,255,0.7)';
            c.font = `600 25px ${FONT}`;
            c.fillText(fitText(c, tile.label, tw - 56), x + 30, y + 48);
            c.fillStyle = '#ffffff';
            c.font = tile.emoji ? `56px ${EMOJI_FONT}` : `800 50px ${FONT}`;
            c.fillText(fitText(c, tile.value, tw - 56), x + 30, y + 112);
            c.fillStyle = 'rgba(255,255,255,0.7)';
            c.font = `500 24px ${FONT}`;
            c.fillText(fitText(c, tile.sub, tw - 56), x + 30, y + 144);
        });

        // Кто писал больше
        const yWho = top0 + 3 * (th + gap) + 30;
        c.fillStyle = 'rgba(255,255,255,0.72)';
        c.font = `700 25px ${FONT}`;
        c.fillText((state.users.length > 1 ? t('w.who') : t('w.leader')).toUpperCase(), P, yWho);
        const barY = yWho + 22, barH = 26, barW = W - P * 2;
        const parts = s.users.slice(0, 3).map(([uid, n]) => ({ u: state.userById.get(uid), n }));
        const rest = s.total - parts.reduce((sum, p) => sum + p.n, 0);
        if (rest > 0) parts.push({ u: { name: t('w.others'), color: 'rgba(255,255,255,0.35)' }, n: rest });
        c.save();
        pathRound(P, barY, barW, barH, 13);
        c.clip();
        let bx = P;
        for (const p of parts) {
            const w = (p.n / s.total) * barW;
            c.fillStyle = p.u.color;
            c.fillRect(bx, barY, w + 1, barH);
            bx += w;
        }
        c.restore();
        c.font = `600 26px ${FONT}`;
        let lx = P;
        const ly = barY + barH + 44;
        for (const p of parts) {
            const label = `${fitText(c, p.u.name, 260)} ${Math.round((p.n / s.total) * 100)}%`;
            const w = c.measureText(label).width + 26;
            if (lx + w > W - P) break;
            c.fillStyle = p.u.color;
            c.beginPath();
            c.arc(lx + 8, ly - 9, 8, 0, Math.PI * 2);
            c.fill();
            c.fillStyle = '#ffffff';
            c.fillText(label, lx + 24, ly);
            lx += w + 28;
        }

        // Подвал
        c.fillStyle = 'rgba(255,255,255,0.5)';
        c.font = `600 22px ${FONT}`;
        c.textAlign = 'center';
        c.fillText(t('w.footer'), W / 2, H - 40);
        c.textAlign = 'left';
    }

    function renderWrapped() {
        const years = [...state.a.years.keys()].sort();
        if (!state.wrappedYear || !years.includes(state.wrappedYear)) state.wrappedYear = years[years.length - 1];
        $('wrapped-years').innerHTML = years.map((y) => `<button type="button" data-y="${y}" class="${y === state.wrappedYear ? 'active' : ''}">${y}</button>`).join('');
        const s = computeYear(state.wrappedYear);
        if (!s) return;
        const facts = [
            [t('w.messages'), fmt(s.messages)],
            [t('w.stickers'), fmt(s.stickers)],
            ...wrappedTiles(s).map((tile) => [tile.label, `${tile.value} · ${tile.sub}`]),
        ];
        if (s.voiceSec) facts.push([t('w.voice'), formatDuration(s.voiceSec)]);
        $('wrapped-facts').innerHTML = facts.map(([k, v]) => `<li><span>${escapeHTML(k)}</span><b>${escapeHTML(v)}</b></li>`).join('');
        const draw = () => drawWrapped(s);
        draw();
        // Перерисовываем, когда догрузится шрифт Inter
        if (document.fonts && document.fonts.load) {
            Promise.all([document.fonts.load('800 100px Inter'), document.fonts.load('600 30px Inter')]).then(draw).catch(() => {});
        }
    }

    $('wrapped-years').addEventListener('click', (e) => {
        const b = e.target.closest('button[data-y]');
        if (!b) return;
        state.wrappedYear = b.dataset.y;
        renderWrapped();
    });

    const wrappedBlob = () => new Promise((resolve, reject) => wrappedCanvas.toBlob((b) => (b ? resolve(b) : reject(new Error('toBlob'))), 'image/png'));

    $('wrapped-download').addEventListener('click', async () => {
        const blob = await wrappedBlob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        const safe = state.chat.name.replace(/[\\/:*?"<>|]+/g, '').trim().slice(0, 40) || 'chat';
        link.href = url;
        link.download = `telegram-wrapped-${state.wrappedYear}-${safe}.png`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 2000);
    });
    $('wrapped-copy').addEventListener('click', async () => {
        try {
            if (!navigator.clipboard || typeof ClipboardItem === 'undefined') throw new Error('unsupported');
            await navigator.clipboard.write([new ClipboardItem({ 'image/png': wrappedBlob() })]);
            toast(t('wrap.copied'), true);
        } catch (e) {
            toast(t('wrap.copyFail'));
        }
    });

    // ================================================================
    // Просмотр сообщений
    // ================================================================
    const viewerBox = $('viewer-messages');
    const viewerDate = $('viewer-date');
    const viewerSearch = $('viewer-search');
    const viewerUser = $('viewer-user');
    const MAX_RESULTS = 500;

    function initViewer(keep) {
        viewerDate.min = keyFromNum(state.activeDays[0]);
        viewerDate.max = keyFromNum(state.activeDays[state.activeDays.length - 1]);
        if (!keep) viewerSearch.value = '';
        viewerUser.innerHTML = userOptions(t('viewer.allAuthors'));
        viewerUser.value = state.viewer.user;
        viewerUser.classList.toggle('hidden', state.users.length < 2);
        renderViewer();
    }

    function openDay(dn, scroll, query = '') {
        Object.assign(state.viewer, { day: dn, scope: 'day', query, user: '' });
        viewerSearch.value = query;
        viewerUser.value = '';
        renderViewer();
        if (scroll) $('viewer-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function goToMessage(idx, scrollCard) {
        const m = state.msgs[idx];
        if (!m) return;
        const sameView = state.viewer.scope === 'day' && state.viewer.day === m.day && !state.viewer.query && !state.viewer.user;
        if (!sameView) openDay(m.day, false);
        if (scrollCard) $('viewer-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
        const el = viewerBox.querySelector(`.msg[data-idx="${idx}"]`);
        if (el) {
            const delta = el.getBoundingClientRect().top - viewerBox.getBoundingClientRect().top;
            viewerBox.scrollTop += delta - viewerBox.clientHeight / 2 + el.offsetHeight / 2;
            el.classList.remove('flash');
            void el.offsetWidth;
            el.classList.add('flash');
        }
    }

    function highlight(text, q) {
        if (!q) return escapeHTML(text);
        const lower = text.toLowerCase();
        if (lower.length !== text.length) return escapeHTML(text);
        let out = '', pos = 0, i;
        while ((i = lower.indexOf(q, pos)) !== -1) {
            out += escapeHTML(text.slice(pos, i)) + '<mark>' + escapeHTML(text.slice(i, i + q.length)) + '</mark>';
            pos = i + q.length;
        }
        return out + escapeHTML(text.slice(pos));
    }

    function safeHref(url) {
        const u = String(url || '').trim();
        if (/^https?:\/\//i.test(u)) return u;
        if (/^mailto:/i.test(u)) return u;
        if (!/^[a-z][a-z0-9+.-]*:/i.test(u) && /^[\w.-]+\.[a-z]{2,}/i.test(u)) return 'https://' + u;
        return null;
    }

    function renderRich(m, q) {
        if (!m.rich) return highlight(m.text, q);
        return m.rich.map((p) => {
            if (typeof p === 'string') return highlight(p, q);
            const tx = p.text || '';
            const inner = highlight(tx, q);
            switch (p.type) {
                case 'link': {
                    const href = safeHref(tx);
                    return href ? `<a href="${escapeHTML(href)}" target="_blank" rel="noopener noreferrer">${inner}</a>` : inner;
                }
                case 'text_link': {
                    const href = safeHref(p.href);
                    return href ? `<a href="${escapeHTML(href)}" target="_blank" rel="noopener noreferrer">${inner}</a>` : inner;
                }
                case 'email': return `<a href="mailto:${escapeHTML(tx)}">${inner}</a>`;
                case 'bold': return `<b>${inner}</b>`;
                case 'italic': return `<i>${inner}</i>`;
                case 'underline': return `<u>${inner}</u>`;
                case 'strikethrough': return `<s>${inner}</s>`;
                case 'code': return `<code>${inner}</code>`;
                case 'pre': return `<pre><code>${inner}</code></pre>`;
                case 'mention': case 'mention_name': case 'hashtag': case 'cashtag': case 'bot_command':
                    return `<span style="color:var(--accent)">${inner}</span>`;
                default: return inner;
            }
        }).join('');
    }

    function mediaLabel(m) {
        const dur = m.dur ? ' · ' + formatClock(m.dur) : '';
        switch (m.kind) {
            case 'sticker': return `<span class="emoji-big">${escapeHTML(m.emoji || '🖼️')}</span> ${t('m.sticker')}`;
            case 'photo': return `🖼️ ${t('m.photo')}`;
            case 'video': return `🎬 ${t('m.video')}${dur}`;
            case 'round': return `⏺️ ${t('m.round')}${dur}`;
            case 'voice': return `🎤 ${t('m.voice')}${dur}`;
            case 'gif': return `🎞️ ${t('m.gif')}`;
            case 'audio': return `🎵 ${escapeHTML([m.performer, m.title].filter(Boolean).join(' — ') || m.fileName || t('m.audio'))}`;
            case 'file': return `📎 ${escapeHTML(m.fileName || t('m.file'))}`;
            case 'poll': return `📊 ${t('m.poll')}: ${escapeHTML(m.poll)}`;
            case 'location': return `📍 ${t('m.location')}`;
            case 'contact': return `👤 ${t('m.contact')}`;
            default: return '';
        }
    }

    function snippet(m) {
        if (m.text && m.kind !== 'sticker') return m.text.length > 90 ? m.text.slice(0, 90) + '…' : m.text;
        if (m.kind === 'sticker') return `${m.emoji || ''} ${t('m.sticker')}`.trim();
        return t('m.' + m.kind);
    }

    function bubbleHTML(m, idx, prev, q) {
        const u = state.userById.get(m.author);
        const cont = prev && prev.author === m.author && prev.day === m.day && m.ts - prev.ts < 300;
        let body = '';
        if (m.fwd) body += `<div class="bubble-fwd">${escapeHTML(t('viewer.fwd', { name: m.fwd }))}</div>`;
        if (m.reply != null) {
            const ri = state.a.byId.get(m.reply);
            if (ri !== undefined) {
                const r = state.msgs[ri];
                const ru = state.userById.get(r.author);
                body += `<div class="bubble-reply" data-goto="${ri}" title="${escapeHTML(t('viewer.goto'))}"><b style="color:${ru.color}">${escapeHTML(ru.name)}</b> · ${escapeHTML(snippet(r))}</div>`;
            }
        }
        const media = mediaLabel(m);
        if (media) body += `<div class="bubble-media">${media}</div>`;
        if (m.text && m.kind !== 'sticker') body += `<div class="bubble-text">${renderRich(m, q)}</div>`;
        if (!body) body = `<div class="bubble-media">${t('viewer.empty')}</div>`;
        if (m.rx) body += `<div class="reacts">${reactChips(m.rx)}</div>`;
        return `
            <div class="msg${cont ? ' cont' : ''}" data-idx="${idx}">
                <span class="avatar avatar-sm" style="background:${u.color}">${escapeHTML(u.initials)}</span>
                <div class="bubble">
                    <div class="bubble-head">
                        ${cont ? '' : `<span class="bubble-author" style="color:${u.color}">${escapeHTML(u.name)}</span>`}
                        <span class="bubble-time">${m.edited ? `<span class="bubble-edited">${t('viewer.edited')}</span> ` : ''}${m.date.slice(11, 16)}</span>
                    </div>
                    ${body}
                </div>
            </div>`;
    }

    function matches(m, q, user) {
        if (user && m.author !== user) return false;
        if (q && !m.text.toLowerCase().includes(q)) return false;
        return true;
    }

    function renderViewer() {
        const v = state.viewer;
        const q = v.query.toLowerCase();
        viewerDate.value = keyFromNum(v.day);
        document.querySelectorAll('#viewer-scope button').forEach((b) => b.classList.toggle('active', b.dataset.scope === v.scope));
        const prevDay = state.activeDays[lowerBound(state.activeDays, v.day) - 1];
        const nextIdx = lowerBound(state.activeDays, v.day + 1);
        $('viewer-prev').disabled = v.scope !== 'day' || prevDay === undefined;
        $('viewer-next').disabled = v.scope !== 'day' || nextIdx >= state.activeDays.length;
        viewerDate.disabled = v.scope !== 'day';

        let indices = [];
        let totalFound = 0;
        if (v.scope === 'day') {
            const range = state.a.dayRange.get(v.day);
            if (range) for (let i = range[0]; i < range[1]; i++) if (matches(state.msgs[i], q, v.user)) indices.push(i);
            totalFound = indices.length;
        } else if (q || v.user) {
            for (let i = 0; i < state.msgs.length; i++) if (matches(state.msgs[i], q, v.user)) indices.push(i);
            totalFound = indices.length;
            if (indices.length > MAX_RESULTS) indices = indices.slice(-MAX_RESULTS);
        }

        $('viewer-count').textContent = v.scope === 'day'
            ? `${formatDay(v.day, { weekday: true })} · ${pn(totalFound, 'message')}`
            : (q || v.user ? t('viewer.found', { n: fmt(totalFound) }) : '');

        let html = '';
        if (v.scope === 'all' && !q && !v.user) {
            html = `<div class="empty">${t('viewer.hintAll')}</div>`;
        } else if (!indices.length) {
            if (v.scope === 'day' && !state.a.dayRange.has(v.day)) {
                const ni = lowerBound(state.activeDays, v.day);
                const cands = [state.activeDays[ni - 1], state.activeDays[ni]].filter((x) => x !== undefined);
                const nearest = cands.sort((a, b) => Math.abs(a - v.day) - Math.abs(b - v.day))[0];
                html = `<div class="empty">${t('viewer.noDay')}${nearest !== undefined ? `<br><button type="button" class="btn btn-soft" style="margin-top:0.75rem" data-day="${nearest}">${escapeHTML(t('viewer.nearest', { date: formatDay(nearest) }))}</button>` : ''}</div>`;
            } else {
                html = `<div class="empty">${t('viewer.nothing')}</div>`;
            }
        } else {
            if (v.scope === 'all' && totalFound > MAX_RESULTS) {
                html += `<div class="viewer-note">${t('viewer.limited', { n: fmt(MAX_RESULTS), total: fmt(totalFound) })}</div>`;
            }
            let prev = null;
            for (const i of indices) {
                const m = state.msgs[i];
                if (v.scope === 'all' && (!prev || prev.day !== m.day)) {
                    html += `<div class="day-sep" data-day="${m.day}" title="${escapeHTML(t('viewer.openDay'))}">${escapeHTML(formatDay(m.day, { weekday: true }))}</div>`;
                    prev = null;
                }
                html += bubbleHTML(m, i, prev, q);
                prev = m;
            }
        }
        viewerBox.innerHTML = html;
        viewerBox.scrollTop = v.scope === 'all' ? viewerBox.scrollHeight : 0;
    }

    viewerBox.addEventListener('click', (e) => {
        const reply = e.target.closest('[data-goto]');
        if (reply) { goToMessage(+reply.dataset.goto); return; }
        const day = e.target.closest('[data-day]');
        if (day) { openDay(+day.dataset.day, false); return; }
        if (e.target.closest('a')) return;
        const msg = e.target.closest('.msg');
        if (msg && (state.viewer.scope === 'all' || state.viewer.query || state.viewer.user) && !window.getSelection().toString()) {
            goToMessage(+msg.dataset.idx);
        }
    });

    viewerDate.addEventListener('change', () => {
        if (!viewerDate.value) return;
        state.viewer.day = dayNum(viewerDate.value);
        renderViewer();
    });
    $('viewer-prev').addEventListener('click', () => {
        const i = lowerBound(state.activeDays, state.viewer.day) - 1;
        if (i >= 0) { state.viewer.day = state.activeDays[i]; renderViewer(); }
    });
    $('viewer-next').addEventListener('click', () => {
        const i = lowerBound(state.activeDays, state.viewer.day + 1);
        if (i < state.activeDays.length) { state.viewer.day = state.activeDays[i]; renderViewer(); }
    });
    let viewerSearchTimer = null;
    viewerSearch.addEventListener('input', () => {
        clearTimeout(viewerSearchTimer);
        viewerSearchTimer = setTimeout(() => { state.viewer.query = viewerSearch.value.trim(); renderViewer(); }, 200);
    });
    viewerUser.addEventListener('change', () => { state.viewer.user = viewerUser.value; renderViewer(); });
    $('viewer-scope').addEventListener('click', (e) => {
        const b = e.target.closest('button[data-scope]');
        if (!b) return;
        state.viewer.scope = b.dataset.scope;
        renderViewer();
        if (b.dataset.scope === 'all') viewerSearch.focus();
    });

    // ================================================================
    // ИИ-ассистент
    // ================================================================
    const AI_DEFAULTS = { model: 'llama-3.3-70b-versatile', base: 'https://api.groq.com/openai/v1' };
    const store = {
        get(k, d = '') { try { return localStorage.getItem(k) ?? d; } catch (e) { return d; } },
        set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } },
    };
    const aiSettings = () => ({
        key: store.get('groq_api_key'),
        model: store.get('groq_model_name') || AI_DEFAULTS.model,
        base: (store.get('groq_base_url') || AI_DEFAULTS.base).replace(/\/+$/, ''),
        sample: store.get('tga_ai_sample') === '1',
    });
    const viaHttp = location.protocol === 'http:' || location.protocol === 'https:';

    function buildAiContext() {
        const a = state.a;
        const words = getSortedWords('');
        const candidates = words.slice(0, 3000);
        const users = state.users.slice(0, 25).map((u) => ({
            name: u.name,
            messages: u.messages,
            stickers: u.stickers,
            photos: u.kinds.photo || 0,
            videos: (u.kinds.video || 0) + (u.kinds.round || 0),
            voice: u.kinds.voice || 0,
            voiceMinutes: Math.round(u.voiceSec / 60),
            avgMessageLength: Math.round(u.avgLen),
            longestMessage: u.longest,
            activeDays: u.days,
            conversationStarts: u.starts,
            medianReplyTime: u.medianReply != null ? formatDuration(u.medianReply) : null,
            firstMessage: keyFromNum(u.first),
            lastMessage: keyFromNum(u.last),
            reactionsGiven: u.rGiven,
            reactionsReceived: u.rReceived,
            favouriteReaction: u.favReaction ? u.favReaction[0] : null,
            favouriteEmoji: u.topEmoji.map(([e]) => e).join(' '),
            favouriteWords: candidates.filter(([, r]) => r.u[u.id]).sort((x, y) => y[1].u[u.id] - x[1].u[u.id]).slice(0, 12).map(([w]) => w).join(', '),
        }));
        const hours = new Array(24).fill(0), weekdays = new Array(7).fill(0);
        a.heat.forEach((row, d) => row.forEach((v, h) => { hours[h] += v; weekdays[d] += v; }));
        const busiest = [...a.dayRange.entries()].map(([d, [s, e]]) => [d, e - s]).sort((x, y) => y[1] - x[1]).slice(0, 10)
            .map(([d, c]) => `${keyFromNum(d)}: ${c}`);
        const yearly = {};
        for (const [y, d] of a.years) yearly[y] = { messages: d.messages, stickers: d.stickers };
        return {
            chat: state.chat.name,
            type: state.chat.type,
            period: `${keyFromNum(a.activeDays[0])} — ${keyFromNum(a.activeDays[a.activeDays.length - 1])}`,
            activeDays: a.activeDays.length,
            totalMessages: a.totalMsg,
            totalStickers: a.totalStk,
            messageTypes: a.kindsTotal,
            participantsTotal: state.users.length,
            participants: users,
            topWords: words.slice(0, 40).map(([w, r]) => `${w} (${r.t})`).join(', '),
            topEmoji: [...a.emoji.entries()].sort((x, y) => y[1] - x[1]).slice(0, 15).map(([e, c]) => `${e} ${c}`).join(', '),
            reactions: a.reactions.total ? {
                total: a.reactions.total,
                top: [...a.reactions.byEmoji.entries()].sort((x, y) => y[1] - x[1]).slice(0, 10).map(([e, c]) => `${e} ${c}`).join(', '),
            } : null,
            yearly,
            monthly: state.series.month.slice(-48).map((b) => `${keyFromNum(b.start).slice(0, 7)}: ${b.messages}+${b.stickers}st`).join('; '),
            byWeekday_MonToSun: weekdays,
            byHour_0to23: hours,
            busiestDays: busiest.join('; '),
            longestStreakDays: a.bestStreak,
        };
    }

    function recentSample(limit = 150) {
        const out = [];
        for (let i = state.msgs.length - 1; i >= 0 && out.length < limit; i--) {
            const m = state.msgs[i];
            const u = state.userById.get(m.author);
            const content = m.text && m.kind !== 'sticker' ? m.text.replace(/\s+/g, ' ').slice(0, 300) : `[${snippet(m)}]`;
            out.push(`[${m.date.slice(0, 16).replace('T', ' ')}] ${u.name}: ${content}`);
        }
        return out.reverse().join('\n');
    }

    function systemPrompt() {
        let p = t('ai.system').replace('{json}', JSON.stringify(state.aiContext));
        if (aiSettings().sample) p += `\n\n${t('ai.sampleHeader')}\n${recentSample()}`;
        return p;
    }

    const aiWindow = $('ai-chat-window');
    const aiMessages = $('ai-messages');
    const aiInput = $('ai-input');
    const settingsPanel = $('ai-settings-panel');

    function md(src) {
        const text = escapeHTML(String(src).replace(/<think>[\s\S]*?<\/think>/g, '').trim());
        const inline = (s) => s
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
            .replace(/__([^_]+)__/g, '<b>$1</b>')
            .replace(/(^|[^*\w])\*([^*\n]+)\*(?!\w)/g, '$1<i>$2</i>');
        const lines = text.split('\n');
        let html = '', para = [], list = null, table = null;
        const flushPara = () => { if (para.length) { html += `<p>${inline(para.join('<br>'))}</p>`; para = []; } };
        const flushList = () => { if (list) { html += `<${list.tag}>${list.items.map((i) => `<li>${inline(i)}</li>`).join('')}</${list.tag}>`; list = null; } };
        const flushTable = () => {
            if (table) {
                const rows = table.filter((r) => !/^\|?\s*:?-{2,}/.test(r));
                const cells = (r) => r.replace(/^\||\|$/g, '').split('|').map((c) => inline(c.trim()));
                html += '<table>' + rows.map((r, i) => `<tr>${cells(r).map((c) => (i === 0 ? `<th>${c}</th>` : `<td>${c}</td>`)).join('')}</tr>`).join('') + '</table>';
                table = null;
            }
        };
        const flushAll = () => { flushPara(); flushList(); flushTable(); };
        for (const raw of lines) {
            const line = raw.trimEnd();
            let mm;
            if (/^\s*\|.*\|\s*$/.test(line)) { flushPara(); flushList(); (table = table || []).push(line.trim()); continue; }
            flushTable();
            if ((mm = line.match(/^\s*[-*•]\s+(.*)$/))) { flushPara(); if (!list || list.tag !== 'ul') { flushList(); list = { tag: 'ul', items: [] }; } list.items.push(mm[1]); }
            else if ((mm = line.match(/^\s*\d+[.)]\s+(.*)$/))) { flushPara(); if (!list || list.tag !== 'ol') { flushList(); list = { tag: 'ol', items: [] }; } list.items.push(mm[1]); }
            else if ((mm = line.match(/^#{1,6}\s+(.*)$/))) { flushAll(); html += `<h4>${inline(mm[1])}</h4>`; }
            else if (/^\s*(-{3,}|\*{3,})\s*$/.test(line)) { flushAll(); }
            else if (!line.trim()) { flushAll(); }
            else { flushList(); para.push(line); }
        }
        flushAll();
        return html;
    }

    function addAiMessage(role, text, { error = false } = {}) {
        const el = document.createElement('div');
        el.className = `ai-msg ${role === 'user' ? 'user' : 'bot'}${error ? ' error' : ''}`;
        if (role === 'user') el.textContent = text;
        else el.innerHTML = md(text);
        aiMessages.appendChild(el);
        aiMessages.scrollTop = aiMessages.scrollHeight;
        return el;
    }

    function renderSuggestions() {
        const box = $('ai-suggestions');
        const show = state.aiHistory.length === 0;
        box.innerHTML = show ? t('ai.suggestions').map((s) => `<button type="button">${escapeHTML(s)}</button>`).join('') : '';
        box.classList.toggle('hidden', !show);
    }

    function resetAiChat() {
        state.aiHistory = [];
        aiMessages.innerHTML = '';
        const n = state.users.length;
        const who = n === 2
            ? t('ai.whoTwo', { a: state.users[0].name, b: state.users[1].name })
            : n > 2 ? t('ai.whoMany', { n: pn(n, 'participant') }) : '';
        addAiMessage('bot', t('ai.hello', { chat: state.chat.name, who }));
        renderSuggestions();
    }

    function openAi() {
        aiWindow.classList.remove('hidden');
        requestAnimationFrame(() => aiWindow.classList.add('open'));
        const s = aiSettings();
        if (!s.key && !(state.serverKey && s.base === AI_DEFAULTS.base)) openSettings();
        else aiInput.focus();
    }
    function closeAi() {
        aiWindow.classList.remove('open');
        setTimeout(() => { if (!aiWindow.classList.contains('open')) aiWindow.classList.add('hidden'); }, 200);
    }
    function openSettings() {
        const s = aiSettings();
        $('ai-api-key-input').value = s.key;
        $('ai-model-input').value = s.model;
        $('ai-base-url-input').value = s.base;
        $('ai-include-sample').checked = s.sample;
        $('ai-server-key-note').textContent = !state.serverOk ? t('ai.noteFile') : state.serverKey ? t('ai.noteServer') : t('ai.noteNoServer');
        settingsPanel.classList.remove('hidden');
        $('ai-api-key-input').focus();
    }

    $('ai-toggle-btn').addEventListener('click', () => (aiWindow.classList.contains('open') ? closeAi() : openAi()));
    $('ai-close-btn').addEventListener('click', closeAi);
    $('ai-clear-btn').addEventListener('click', resetAiChat);
    $('ai-settings-btn').addEventListener('click', () => (settingsPanel.classList.contains('hidden') ? openSettings() : settingsPanel.classList.add('hidden')));
    $('ai-settings-cancel').addEventListener('click', () => settingsPanel.classList.add('hidden'));
    $('ai-settings-save').addEventListener('click', () => {
        store.set('groq_api_key', $('ai-api-key-input').value.trim());
        store.set('groq_model_name', $('ai-model-input').value.trim() || AI_DEFAULTS.model);
        store.set('groq_base_url', $('ai-base-url-input').value.trim() || AI_DEFAULTS.base);
        store.set('tga_ai_sample', $('ai-include-sample').checked ? '1' : '0');
        settingsPanel.classList.add('hidden');
        aiInput.focus();
    });
    $('ai-suggestions').addEventListener('click', (e) => {
        const b = e.target.closest('button');
        if (b) sendAi(b.textContent);
    });
    $('ai-form').addEventListener('submit', (e) => {
        e.preventDefault();
        sendAi(aiInput.value);
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && aiWindow.classList.contains('open')) {
            if (!settingsPanel.classList.contains('hidden')) settingsPanel.classList.add('hidden');
            else closeAi();
        }
    });

    async function requestCompletion(messages) {
        const s = aiSettings();
        let resp;
        if (state.serverOk) {
            resp = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages, model: s.model, api_base: s.base, api_key: s.key }),
            });
        } else {
            // Страница открыта как файл или раздаётся статикой (например, GitHub Pages) — идём в API напрямую
            if (!s.key) throw new Error(t('ai.needKey'));
            resp = await fetch(`${s.base}/chat/completions`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${s.key}` },
                body: JSON.stringify({ model: s.model, messages, temperature: 0.7 }),
            });
        }
        let data = null;
        try { data = await resp.json(); } catch (e) { /* не JSON */ }
        if (!resp.ok) {
            const err = data && (typeof data.error === 'string' ? data.error : data.error && data.error.message);
            const hint = resp.status === 401 || resp.status === 403 ? t('ai.checkKey') : '';
            throw new Error((err || `HTTP ${resp.status}`) + hint);
        }
        const reply = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
        if (!reply) throw new Error(t('ai.emptyReply'));
        return reply;
    }

    async function sendAi(text) {
        text = String(text || '').trim();
        if (!text || state.aiBusy || !state.aiContext) return;
        aiInput.value = '';
        addAiMessage('user', text);
        state.aiHistory.push({ role: 'user', content: text });
        renderSuggestions();

        state.aiBusy = true;
        $('ai-send-btn').disabled = true;
        $('ai-status').textContent = t('ai.typing');
        const typing = document.createElement('div');
        typing.className = 'ai-msg bot';
        typing.innerHTML = '<span class="typing"><span></span><span></span><span></span></span>';
        aiMessages.appendChild(typing);
        aiMessages.scrollTop = aiMessages.scrollHeight;

        try {
            const reply = await requestCompletion([
                { role: 'system', content: systemPrompt() },
                ...state.aiHistory.slice(-16),
            ]);
            typing.remove();
            addAiMessage('bot', reply);
            state.aiHistory.push({ role: 'assistant', content: reply });
        } catch (err) {
            typing.remove();
            state.aiHistory.pop(); // неудачный вопрос не засоряет историю
            addAiMessage('bot', `⚠️ ${err instanceof TypeError ? t('ai.network') : err.message}`, { error: true });
            renderSuggestions();
        } finally {
            state.aiBusy = false;
            $('ai-send-btn').disabled = false;
            $('ai-status').textContent = t('ai.status');
            aiInput.focus();
        }
    }

    // Определяем, запущен ли наш server.py (у статических хостингов /api/status нет)
    if (viaHttp) {
        fetch('/api/status')
            .then((r) => (r.ok ? r.json() : null))
            .then((d) => { if (d && typeof d.serverKey === 'boolean') { state.serverOk = true; state.serverKey = d.serverKey; } })
            .catch(() => {});
    }

    // ---------- Демо-данные и параметры URL (?lang=en, ?demo, #wrapped-card) ----------
    function loadDemo() {
        const run = () => {
            state.exportData = null;
            $('chat-picker').classList.add('hidden');
            openChat(window.TGA_DEMO(LANG)).then(() => {
                const target = location.hash.length > 1 && document.getElementById(location.hash.slice(1));
                if (target) target.scrollIntoView({ block: 'start' });
            });
        };
        if (window.TGA_DEMO) { run(); return; }
        const script = document.createElement('script');
        script.src = 'demo.js';
        script.onload = run;
        script.onerror = () => toast(t('err.demo'));
        document.head.appendChild(script);
    }
    $('demo-btn').addEventListener('click', loadDemo);

    const params = new URLSearchParams(location.search);
    const langParam = params.get('lang');
    if (langParam === 'ru' || langParam === 'en') setLang(langParam);
    else applyStaticTexts();
    showScreen('landing');
    if (params.has('demo')) loadDemo();
})();
