exports.success = function(req, res, message, status) {
  res.status(status || 200).send({
    "error": "",
    "message": message,
  })
}
exports.error = function() {
  //
}