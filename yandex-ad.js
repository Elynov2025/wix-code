(function () {
    // Запускаем весь процесс с задержкой в 2 секунды, чтобы Wix "успокоился"
    setTimeout(function() {
        console.log('WIX-AD-LOADER: Запускаю скрипт...');

        if (window.yaAdsLoaded) {
            console.log('WIX-AD-LOADER: Скрипт уже был запущен ранее. Выход.');
            return;
        }
        window.yaAdsLoaded = true;
        console.log('WIX-AD-LOADER: Установлен флаг yaAdsLoaded.');

        window.yaContextCb = window.yaContextCb || [];
        console.log('WIX-AD-LOADER: Массив yaContextCb готов.');

        window.yaContextCb.push(() => {
            console.log('WIX-AD-LOADER: Сработал колбэк Яндекса.');
            if (window.Ya && window.Ya.Context && window.Ya.Context.AdvManager) {
                console.log('WIX-AD-LOADER: API Яндекса доступно. Вызываю render...');
                Ya.Context.AdvManager.render({
                    blockId: 'R-A-14383531-1',
                    type: 'fullscreen',
                    platform: 'touch'
                });
            } else {
                console.error('WIX-AD-LOADER: ОШИБКА: API Яндекса НЕ найдено!');
            }
        });

        if (!document.querySelector('script[src*="an.yandex.ru/system/context.js"]')) {
            console.log('WIX-AD-LOADER: Основной скрипт Яндекса не найден. Создаю и добавляю на страницу...');
            const yandexScript = document.createElement('script');
            yandexScript.src = "//an.yandex.ru/system/context.js";
            yandexScript.async = true;
            document.head.appendChild(yandexScript);
        } else {
            console.log('WIX-AD-LOADER: Основной скрипт Яндекса уже есть на странице.');
        }

    }, 2000); // Задержка 2000 миллисекунд = 2 секунды

})();
