const AWS_SECRET = "AKIAIOSFODNN7EXAMPLE";
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello");
});

app.listen(3000);
