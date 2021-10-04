exports.success = function(req, res, message, resStatus) {
  res.status(resStatus || 200).send({
    "error": "",
    "message": message,
  })
}
exports.error = function() {
  //
}