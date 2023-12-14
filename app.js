const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const apiRoutes = require('./routes/apiRoutes');


const mongoose = require('mongoose');

const cors = require('cors');

require('dotenv').config();

const app = express();

// view engine setup

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

const mongoConnect = async ()=>{
  try {
    await mongoose.connect(
      process.env.MONGODB_URL
    )
    console.log('Mongo to connect' + 'on port' + process.env.PORT)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

app.use('/api', apiRoutes);

mongoConnect();
module.exports = app;