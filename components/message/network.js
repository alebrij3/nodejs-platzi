// esta capa de red es la responsable de recibir la petición HTTP y enviarla al controlador
// por eso importamos express y asignamos el router aquí en lugar de en server.js

const express = require("express");

const multer = require("multer");
const response = require("../../network/response");
const controller = require("./controller");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const fileExtension = file.originalname.substring(
      file.originalname.lastIndexOf(".")
    );
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + fileExtension);
  },
});

const upload = multer({ storage: storage });

router.get("/", function (req, res) {
  const filterMessages = req.query.chat || null;
  controller
    .getMessages(filterMessages)
    .then((messagesList) => response.success(req, res, messagesList, 200))
    .catch((e) => response.error(req, res, "Unexpected error", 500, e));
});

router.post("/", upload.single("file"), function (req, res) {
  controller
    .addMessage(req.body.user, req.body.chat, req.body.message)
    .then(() => response.success(req, res, "Mensaje creado correctamente", 201))
    .catch((e) =>
      response.error(req, res, "Información inválida", 400, "Faltan datos")
    );
});

router.patch("/:id", function (req, res) {
  controller
    .updateMessage(req.params.id, req.body.text)
    .then((data) => response.success(req, res, data, 200))
    .catch((e) => response.error(req, res, "Error interno", 500, e));
});

router.delete("/:id", function (req, res) {
  controller
    .deleteMessage(req.params.id)
    .then((data) => response.success(req, res, data, 200))
    .catch((e) => response.error(req, res, "Error interno", 500, e));
});

module.exports = router;
