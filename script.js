const translations = {
    en: {
        nav_home: "HOME", nav_how: "HOW IT WORKS", nav_download: "DOWNLOAD", nav_faq: "FAQ",
        stamp_local: "100% LOCAL", stamp_cloud: "NO CLOUD",
        hero_title: "LOCAL AI MADE<br>SIMPLE, CONVENIENT",
        hero_hey: "HEY YOU!",
        hero_desc: "DO YOU WANT TO CHECK TEXT WITHOUT SENDING IT TO THE CLOUD? IT'S JUST TOO DARN EXPENSIVE TO PAY FOR TOKENS. YOU ARE SICK OF BUYING SUBSCRIPTIONS, TRYING TO REMEMBER PASSWORDS, AND COUNTING THE CENTS PER MINUTE? FORGET ALL THAT!",
        hero_start: "START USING NAUM SUBTEXT",
        btn_how: "SEE HOW IT WORKS", btn_download: "DOWNLOAD NOW", tell_friends: "tell your friends",
        how_title: "HOW IT WORKS",
        how_1_title: "1. INSTALL", how_1_desc: "Run a single PowerShell command. Everything downloads and installs locally on your drive.",
        how_2_title: "2. CHECK", how_2_desc: "Use the terminal to check language and grammar. 70+ languages supported out of the box.",
        how_3_title: "3. NO CLOUD", how_3_desc: "Your text never leaves your computer. No API keys, no subscriptions, no limits.",
        dl_title: "DOWNLOAD",
        dl_ps_title: "POWERSHELL COMMAND", dl_ps_desc: "Open PowerShell as Administrator and paste this:",
        btn_copy: "COPY", dl_ps_note: "* Requires Windows 10/11. Min: 8GB RAM (Comfort: 16GB)",
        dl_zip_title: "MANUAL DOWNLOAD", dl_zip_desc: "Download the ZIP archive and extract it to drive Q:",
        btn_zip: "DOWNLOAD ZIP (4.6 GB)", dl_zip_note: "* Extract to any folder and run install.bat",
        faq_title: "FAQ",
        faq_1_q: "Is this really free?", faq_1_a: "Yes. Naum runs locally on your hardware. You don't pay for tokens or API calls.",
        faq_2_q: "Does it work offline?", faq_2_a: "Yes, once installed, no internet connection is required.",
        faq_3_q: "Can it detect 'OK'?", faq_3_a: "No, 'OK' is an international word without a specific language. Naum needs at least 2 words to determine the language accurately.",
        footer: "© 2026 NAUM SUBTEXT. ALL RIGHTS RESERVED."
    },
    ru: {
        nav_home: "ГЛАВНАЯ", nav_how: "КАК ЭТО РАБОТАЕТ", nav_download: "СКАЧАТЬ", nav_faq: "ВОПРОСЫ",
        stamp_local: "100% ЛОКАЛЬНО", stamp_cloud: "БЕЗ ОБЛАКА",
        hero_title: "ЛОКАЛЬНЫЙ ИИ<br>ПРОСТО И УДОБНО",
        hero_hey: "ЭЙ ТЫ!",
        hero_desc: "ХОЧЕШЬ ПРОВЕРЯТЬ ТЕКСТ, НЕ ОТПРАВЛЯЯ ЕГО В ОБЛАКО? ПЛАТИТЬ ЗА ТОКЕНЫ СЛИШКОМ ДОРОГО. НАДОЕЛО ПОКУПАТЬ ПОДПИСКИ, ЗАПОМИНАТЬ ПАРОЛИ И СЧИТАТЬ КОПЕЙКИ ЗА МИНУТУ? ЗАБУДЬ ОБ ЭТОМ!",
        hero_start: "НАЧНИ ИСПОЛЬЗОВАТЬ NAUM SUBTEXT",
        btn_how: "КАК ЭТО РАБОТАЕТ", btn_download: "СКАЧАТЬ СЕЙЧАС", tell_friends: "расскажи друзьям",
        how_title: "КАК ЭТО РАБОТАЕТ",
        how_1_title: "1. УСТАНОВКА", how_1_desc: "Одна команда в PowerShell. Всё скачивается и устанавливается локально на твой диск.",
        how_2_title: "2. ПРОВЕРКА", how_2_desc: "Используй терминал для проверки языка и грамматики. Поддержка 70+ языков из коробки.",
        how_3_title: "3. БЕЗ ОБЛАКА", how_3_desc: "Твой текст никогда не покидает компьютер. Никаких API-ключей, подписок и лимитов.",
        dl_title: "СКАЧАТЬ",
        dl_ps_title: "КОМАНДА POWERSHELL", dl_ps_desc: "Открой PowerShell от имени администратора и вставь:",
        btn_copy: "КОПИРОВАТЬ", dl_ps_note: "* Требуется Windows 10/11. Мин: 8 ГБ ОЗУ (Комфорт: 16 ГБ)",
        dl_zip_title: "РУЧНОЕ СКАЧИВАНИЕ", dl_zip_desc: "Скачай ZIP-архив и распакуй на диск Q:",
        btn_zip: "СКАЧАТЬ ZIP (4.6 ГБ)", dl_zip_note: "* Распакуй в любую папку и запусти install.bat",
        faq_title: "ВОПРОСЫ",
        faq_1_q: "Это действительно бесплатно?", faq_1_a: "Да. Naum работает локально на твоём железе. Ты не платишь за токены или API.",
        faq_2_q: "Работает ли офлайн?", faq_2_a: "Да, после установки интернет не нужен.",
        faq_3_q: "Может ли он определить 'OK'?", faq_3_a: "Нет, 'OK' — интернациональное слово без конкретного языка. Naum нужно минимум 2 слова для точного определения.",
        footer: "© 2026 NAUM SUBTEXT. ВСЕ ПРАВА ЗАЩИЩЕНЫ."
    }
};

function setLanguage(lang) {
    localStorage.setItem('naum_lang', lang);
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            // Если это кнопка копирования, не меняем текст, если она сейчас в состоянии "Скопировано"
            if (key === 'btn_copy' && el.classList.contains('copied')) return;
            el.innerHTML = translations[lang][key];
        }
    });
    document.getElementById('btn-ru').classList.toggle('active', lang === 'ru');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
}

// Обрати внимание: мы добавили аргумент buttonElement
function copyToClipboard(text, buttonElement) {
    navigator.clipboard.writeText(text).then(() => {
        const codeBlock = document.getElementById('ps-command');
        const isRu = (localStorage.getItem('naum_lang') || 'ru') === 'ru';
        
        // Меняем текст
        buttonElement.textContent = isRu ? 'СКОПИРОВАНО!' : 'COPIED!';
        
        // Добавляем классы для анимации
        buttonElement.classList.add('copied');
        if (codeBlock) codeBlock.classList.add('highlight');

        // Возвращаем обратно
        setTimeout(() => {
            buttonElement.textContent = translations[isRu ? 'ru' : 'en']['btn_copy'];
            buttonElement.classList.remove('copied');
            if (codeBlock) codeBlock.classList.remove('highlight');
        }, 2000);
    }).catch(err => {
        console.error('Ошибка копирования: ', err);
        buttonElement.textContent = 'ERROR';
    });
}

// Эффект печатной машинки для команды
function startTypewriter() {
    const codeElement = document.getElementById('ps-command');
    if (!codeElement) return;
    
    const text = "irm https://naum.ai/install.ps1 | iex";
    let i = 0;
    codeElement.innerHTML = "";
    
    function type() {
        if (i < text.length) {
            codeElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50); // Скорость печати
        } else {
            // Добавляем мигающий курсор после окончания
            codeElement.innerHTML += '<span class="cursor"></span>';
        }
    }
    setTimeout(type, 1000); // Начинаем печатать через секунду после загрузки
}

document.addEventListener('DOMContentLoaded', () => {
    startTypewriter();
    const saved = localStorage.getItem('naum_lang') || 'ru';
    setLanguage(saved);
});

