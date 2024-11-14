const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3033;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Toys Service is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});