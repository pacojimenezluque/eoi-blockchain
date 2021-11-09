const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
app.use(express.urlencoded({
    extended: true
}))
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
const port = 3000
const port = process.env.PORT || 3000

function isAuthenticated(user, password) {
    return user == 'admin' && password == 'admin'
}

// Las vistas de mi web
// GET PUT POST DELETE - API
// GET cuando pedimos una web
// POST Cuando enviamos un form (Login, Registro)
app.get('/', function(request, response) {
    response.render('index')
})

// POST Cuando enviamos un form (Login) /login
// Un pagina de login
app.get('/login', (request, response) => {
    response.render('login')
})

app.post('/login', (request, response) => {
    const user = request.body.user
    const password = request.body.password

    if (isAuthenticated(user, password)) {
        // TODO Implement dashboard
        response.redirect('/dashboard')
    } else {
        // TODO Mostrar un mensaje en el login en el login.handlebars
        // TODO Meter un estilo tipo Bootstrap
        response.send('ERROR!')
    }
})

// Cuando alguien meta user "admin" y password "admin"
// 1. decirme que estoy autenticado "EXITO!"
// 2. redireccione a una pagina interna /dashboard
// 3. si el user password no es admin admin, mostrar "ERROR!"


app.get('/contacto', function(request, response) {
    response.render('contact')
})

app.post('/contacto', function(request, response) {
    console.log(request.body.email)
    console.log(request.body.message)
    // TODO Enviar mail con sendgrid
    response.send('Enviado')
})

app.get('/:user', function(request, response) {
    // TODO Hacer una consulta para traerme los datos
    // de este usuario
    response.send(`Usuario ${request.params.user}`)
})

app.listen(port, function() {
    console.log('Servidor iniciado')
    console.log(`Servidor iniciado en ${port}`)
})