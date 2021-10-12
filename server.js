require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db');

const router = require('./network/routes')

db(process.env.DB_URI)

var app = express();

app.use(bodyParser.json())
//app.use(router);
app.use('/app', express.static('public'))

router(app);

app.listen(3000)
console.log('la aplicación está escuchando en el puerto 3000')