const express = require('express');
const app = express();

const { exec } = require('child_process');

app.get('/ping', (req, res) => {
    exec("ping " + req.query.host);
    res.send("Pinged");
});

app.listen(3000);
