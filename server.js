const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();

var app = express();

app.use(bodyParser.json())
app.use(router);

router.get('/', function (req, res) {
  res.send('Hola desde get')
})

router.delete('/', function(req, res) {
  console.log(req.body)
  res.send('Hola desde post')
})

/* app.use('/', function(req, res) {
  res.send('hola')
}) */

app.listen(3000)
console.log('la aplicación está escuchando en el puerto 3000')