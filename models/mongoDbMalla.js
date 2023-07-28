// Base de datos MONGOSE
const mongoose = require('mongoose');
const { Schema } = mongoose;

const nodemailer = require('nodemailer');

require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

const clienteSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: String
    },
    description: {
        type: String
    }
});

clienteSchema.post('save', function (doc, next) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'Nuevo cliente agregado',
        text: `El cliente ${doc.first_name} ${doc.last_name} quiere contactarse contigo para saber sobre ${doc.description}, por los siguientes mediostanto email ${doc.email} y tel´lefono ${doc.phone_number} puedes contactar+ a ${doc.first_name}
        \n chao`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error al enviar el correo electrónico:', error);
        } else {
            console.log('Correo electrónico enviado:', info.response);
        }
    });

    next();
});

const mongoDB = mongoose.model('Clientes', clienteSchema);
module.exports = mongoDB;