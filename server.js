const express = require('express')
const bodyParser = require('body-parser')

const response = require('./network/response')

const router = express.Router();

var app = express();

app.use(bodyParser.json())
app.use(router);

router.get('/', function (req, res) {
  console.log(req.headers);
  res.header({
    "Custom-Header": "This is my custom header",
  })
  res.send('Hola desde get')
})

router.post('/', function(req, res) {
  console.log(req.body)
  res.status(201).send({ "body": "Creado correctamente" })
})

/* app.use('/', function(req, res) {
  res.send('hola')
}) */

app.listen(3000)
console.log('la aplicación está escuchando en el puerto 3000')