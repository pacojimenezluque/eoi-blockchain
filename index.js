const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static(__dirname + '/public'));
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
const port = process.env.PORT || 3000

function isAuthenticated(user, password) {
    // TODO Comprobar en base de datos el usuario
    return user == 'admin' && password == 'admin'
}

// Las vistas de mi web
// GET PUT POST DELETE - API
// GET cuando pedimos una web
app.get('/', function(request, response) {
    response.render('index')
})

// POST Cuando enviamos un form (Login) /login
// Un pagina de login
// Cuando alguien meta user "admin" y password "admin"
// 1. decirme que estoy autenticado "EXITO!"
// 2. redireccione a una pagina interna /dashboard
// 3. si el user password no es admin admin, mostrar "ERROR!"
app.get('/login', (request, response) => {
    response.render('login')
})

app.post('/login', (request, response) => {
    const user = request.body.user
    const password = request.body.password

    if (isAuthenticated(user, password)) {
        response.redirect('/dashboard')
    } else {
        response.render(
            'login',
            {
                message: 'Usuario o password incorrecto',
                message_error: true
            }
        )
    }
})

app.get('/dashboard', (request, response) => {
    response.render('dashboard')
})


app.get('/contacto', function(request, response) {
    response.render('contact')
})

app.post('/contacto', function(request, response) {
    console.log(request.body.email)
    console.log(request.body.message)
    // TODO Enviar mail con sendgrid
    response.render(
        'contact',
        {message: 'Mensaje enviado!', message_error: false}
    )
})

app.get('/about', function(request, response) {
  response.render('about')
})

app.post('/about', function(request, response) {
  console.log(request.body.email)
  // TODO Enviar mail con sendgrid
  response.render(
      'about',
      {message: 'Te has suscrito', message_error: false}
  )
})

app.get('/users/:user', function(request, response) {
    // TODO Hacer una consulta para traerme los datos
    // de este usuario
    response.send(`Usuario ${request.params.user}`)
})

app.listen(port, function() {
    console.log(`Servidor iniciado en ${port}`)
})