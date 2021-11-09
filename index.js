const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
app.engine('handlebars', exphbs())
app.set ('view engine', 'handlebars')
const port = 3000

//Las vistas de mi web
app.get('/', function(request, response) {
  response.render('index')
})

app.get('/hola', function(request, response) {
  response.render('hola')
})

app.post('/hola', function(request, response) {
  //recogemos el email
  //lo guardamos para spamear
  response.send('ES UN POST!')
})

app.listen(port, function(){
  console.log ('Servidor iniciado')
})
