const express = require('express')
const bodyParser = require('body-parser')

const router = require('./network/routes')

var app = express();

app.use(bodyParser.json())
//app.use(router);
app.use('/app', express.static('public'))

router(app);

app.listen(3000)
console.log('la aplicación está escuchando en el puerto 3000')