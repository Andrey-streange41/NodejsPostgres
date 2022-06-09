const express = require("express");
const sequelize = require("./database.js");
require("dotenv").config();
const models = require("./models/model.js");
const cors = require("cors");
const fileUpload = require('express-fileupload');
const router = require("./routes/index");
const errorHandler = require('./middlewares/ErrorHandling.middleware');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload());
app.use('/api',router);
app.unsubscribe(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log("Server start on port: ", PORT));
  } catch (e) {
    console.log(e.message);
  }
};

start();
