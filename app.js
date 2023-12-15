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
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    process.exit(1);
  }
};

app.use('/api', apiRoutes);

// Ruta para la URL base ("/")
app.get('/', (req, res) => {
  res.send('¡La aplicación está funcionando correctamente!');
});

// Ruta de manejo de errores para rutas no definidas
app.use((req, res, next) => {
  res.status(404).send('Página no encontrada');
});

// Manejo global de errores
app.use((err, req, res, next) => {
  console.error('Error global:', err);
  res.status(500).send('Error interno del servidor');
});

// Escuchar en 0.0.0.0: process.env.PORT
const port = process.env.PORT || 3001;
app.listen (port, '0.0.0.0')

mongoConnect();
module.exports = app;