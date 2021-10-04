const express = require('express')

const response = require('../../network/response')

const router = express.Router();

router.get('/', function (req, res) {
  console.log(req.headers);
  res.header({
    "Custom-Header": "This is my custom header",
  })
  // res.send('Hola desde get')
  response.success(req, res, 'Lista de mensajes')
})

router.post('/', function(req, res) {
  console.log(req.body)
  res.status(201).send({ "body": "Creado correctamente" })
})

module.exports = router;