const express = require('express')

var app = express();

app.use('/', function(req, res) {
  res.send('hola')
})

app.listen(3000)
console.log('la aplicación está escuchando en el puerto 3000')