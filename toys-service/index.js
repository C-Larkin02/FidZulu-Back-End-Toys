const express = require('express');
const bodyParser = require('body-parser');
<<<<<<< HEAD
const ToysRestController = require('./src/service/toys-rest-controller');
=======
const toysRoutes = require('./routes/toysRoutes');
>>>>>>> e4f32b33aaa01cc08b0f60dc2072821864551723

const app = express();
const PORT = process.env.PORT || 3033;

app.use(bodyParser.json());
<<<<<<< HEAD

const toysController = new ToysRestController(app);
=======
app.use('/toys', toysRoutes);
>>>>>>> e4f32b33aaa01cc08b0f60dc2072821864551723

app.listen(PORT, () => {
    console.log(`Toys service listening on port ${PORT}`);
});