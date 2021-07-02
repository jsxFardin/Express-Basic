const express = require('express')
const app = express()

var mongoose = require('mongoose');
var dbUrl = require('./porperties').DB_URL;

/* coneect to mongodb */
mongoose.connect(dbUrl);

mongoose.connection.on('connected', () => {
  console.log('connected to mongodb!');
})

app.listen(4000, () => {
  console.log('Server is listening on port 5000....')
})
