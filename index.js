const express = require('express')
const exphbs = require('express-handlebars')

const { Card, CardRepository } = require('./models/card')

const app = express()
const hbs = exphbs()

app.use(express.urlencoded({
    extended: true
}))
app.use(express.static(__dirname + '/public'));
app.engine('handlebars', hbs)
app.set('view engine', 'handlebars')
const port = process.env.PORT || 3000

function isAuthenticated(user, password) {
    // TODO Comprobar en base de datos el usuario
    return user == 'admin' && password == 'admin'
}

// https://avatars.dicebear.com/api/human/loquesea.svg

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
// Nueva pagina /about, en el menu salga About (/about)
// Dentro de esa pagina, un titulo (h1), un parrafo, un input para suscribirme
// a una newsletter
// Cuando meta mi email y le de al boton de suscribir, me sale un mensaje de exito
// en esa pagina de "suscrito correctamente"
app.get('/about', (request, response) => {
    response.render('about')
})

app.post('/about', (request, response) => {
    response.render('about', {message: 'Te has suscrito!', message_error: false})
})

app.get('/dashboard', (request, response) => {
    response.render('dashboard')
})

app.get('/cards', (request, response) => {
    response.render(
        'cards',
        {cards: new CardRepository().getCards()}
    )
})

app.get('/contacto', function(request, response) {
    response.render('contact')
})

app.post('/contacto', function(request, response) {
    // TODO Enviar mail con sendgrid
    response.render(
        'contact',
        {message: 'Mensaje enviado!', message_error: false}
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