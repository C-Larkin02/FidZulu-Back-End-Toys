const express = require('express');
const bodyParser = require('body-parser');
const toysRoutes = require('./routes/toysRoutes');

const app = express();
const PORT = 3033;

app.use(bodyParser.json());
app.use('/toys', toysRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});