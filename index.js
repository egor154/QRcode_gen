const express = require('express');
const QRCode = require('qrcode');

const app = express();
const PORT = 3000;

app.get('/generate', async (req, res) => {
    const url = 'https://vk.com/e.beloborodov'; // Здесь указываем URL страницы ВКонтакте

    try {
        const qr = await QRCode.toDataURL(url);
        res.send(`<img src="${qr}" />`); // Выводим QR-код на страницу
    } catch (err) {
        res.status(500).send('Ошибка при создании QR-кода.');
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен по адресу http://localhost:${PORT}`);
});
