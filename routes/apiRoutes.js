const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contactController')

router.get('/contacto', (req, res) => {
  const asesor = {
    nombre: 'Jose Fidel Cortez',
    celular: '+57 3184577020',
    email: 'mallasjf@outlook.com',
  };
  const asesor2 = {
    nombre2: 'Call Center',
    celular2: '+57 3052927699',
  };
  res.json({ asesor, asesor2 });
});

router.post('/cliente', contactController.create)
module.exports = router;