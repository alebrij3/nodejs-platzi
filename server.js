const express = require('express')
const router = express.Router();

var app = express();

app.use(router);

router.get('/', function (req, res) {
  res.send('Hola desde get')
})

router.post('/', function(req, res) {
  res.send('Hola desde post')
})

/* app.use('/', function(req, res) {
  res.send('hola')
}) */

app.listen(3000)
console.log('la aplicación está escuchando en el puerto 3000')