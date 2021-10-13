const express = require('express')

const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router();

router.post('/', function(req, res) {
    controller.createChat(req.body.chatUsers)
        .then(data => response.success(req, res, data, 201))
        .catch(e => response.error(req, res, 'Error interno', 500, e))
})

router.get('/:userId', function(req, res) {
    controller.getChats(req.params.userId)
        .then(data => response.success(req, res, data, 201))
        .catch(e => response.error(req, res, 'Error interno', 500, e))
})

module.exports = router;
