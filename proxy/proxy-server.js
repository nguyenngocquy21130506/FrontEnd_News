const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

// Xử lý các yêu cầu proxy
app.get('/rss', async (req, res) => {
    try {
        const rssUrl = req.query.url; // Nhận đường dẫn RSS từ query parameter
        const response = await axios.get(rssUrl);
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching RSS:', error);
        res.status(500).send('Error fetching RSS');
    }
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});