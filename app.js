const express = require('express');
const app = express();

const { execFile } = require('child_process');

app.get('/ping', (req, res) => {
    const host = req.query.host;
    if (typeof host !== 'string' || host.trim() === '') {
        return res.status(400).send('Invalid host');
    }

    execFile('ping', [host], (error) => {
        if (error) {
            return res.status(500).send('Ping failed');
        }
        res.send('Pinged');
    });
});

app.listen(3000);
