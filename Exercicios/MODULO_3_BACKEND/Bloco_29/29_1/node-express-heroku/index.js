const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => res.send('Está vivo, bicho!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
