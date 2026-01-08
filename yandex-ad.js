(function () {
    if (window.yaAdsLoaded) {
        return;
    }
    window.yaAdsLoaded = true;

    window.yaContextCb = window.yaContextCb || [];
    window.yaContextCb.push(() => {
        if (window.Ya && window.Ya.Context && window.Ya.Context.AdvManager) {
            Ya.Context.AdvManager.render({
                blockId: 'R-A-14383531-1',
                type: 'fullscreen',
                platform: 'touch'
            });
        }
    });

    if (!document.querySelector('script[src*="an.yandex.ru/system/context.js"]')) {
        const yandexScript = document.createElement('script');
        yandexScript.src = "//an.yandex.ru/system/context.js";
        yandexScript.async = true;
        document.head.appendChild(yandexScript);
    }
})();
