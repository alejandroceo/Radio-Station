const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Handle WebSocket connections
wss.on('connection', (ws) => {
    console.log('New client connected');
    ws.send('Welcome to the radio station!');
});

// Streaming audio endpoint
app.get('/stream', (req, res) => {
    res.set({
        'Content-Type': 'audio/mpeg',
        'Transfer-Encoding': 'chunked'
    });

    // Command to stream audio to Icecast
    const ffmpegStream = ffmpeg('/home/predator/Escritorio/radio-station/musicas/vallenatos.mp3')
        .format('mp3')
        .audioBitrate(128)
        .on('error', (err) => {
            console.error('Error: ' + err.message);
        });

    ffmpegStream.pipe(res);
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
