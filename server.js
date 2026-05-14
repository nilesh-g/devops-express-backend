// implement simple express server with /hello and /health endpoints

const express = require('express');
const os = require('os');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/hello', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Hello World"
    })
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        hostname: os.hostname(),
        platform: os.platform(),
        memoryUsage: process.memoryUsage(),
        nodeVersion: process.version
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

