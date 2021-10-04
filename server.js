const express = require('express')
const bodyParser = require('body-parser')

const router = require('./components/message/network')

var app = express();

app.use(bodyParser.json())
app.use(router);
app.use('/app', express.static('public'))

/* app.use('/', function(req, res) {
  res.send('hola')
}) */

app.listen(3000)
console.log('la aplicación está escuchando en el puerto 3000')