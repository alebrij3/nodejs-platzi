// esta capa de red es la responsable de recibir la petición HTTP y enviarla al controlador
// por eso importamos express y asignamos el router aquí en lugar de en server.js

const express = require('express')

const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router();

router.get('/', function (req, res) {
  const filterMessages = req.query.user || null;
  controller.getMessages(filterMessages)
    .then(messagesList => response.success(req, res, messagesList, 200))
    .catch(e => response.error(req, res, 'Unexpected error', 500, e))
})

router.post('/', function(req, res) {
  controller.addMessage(req.body.user, req.body.message)
    .then(() => response.success(req, res, 'Mensaje creado correctamente', 201))
    .catch(e => response.error(req, res, 'Información inválida', 400, 'Faltan datos'))
  
})

router.patch('/:id', function (req, res) {
  controller.updateMessage(req.params.id, req.body.text)
    .then(data => response.success(req, res, data, 200))
    .catch(e => response.error(req, res, 'Error interno', 500, e))
})

module.exports = router;