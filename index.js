const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({ bye: 'buddy' });
});

const PORT = process.env.PORT || 6000;
app.listen(PORT);