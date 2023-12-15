const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const apiRoutes = require('./routes/apiRoutes');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

const mongoConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Aplicación conectada al puerto ' + process.env.PORT);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

app.use('/api', apiRoutes);

// Escuchar en 0.0.0.0: process.env.PORT
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Aplicación escuchando en http://0.0.0.0:${port}`);
});

mongoConnect();
module.exports = app;