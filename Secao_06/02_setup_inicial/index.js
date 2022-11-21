const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const users = require('./users')


app.use(express.urlencoded({
    extended: true,
}),)

app.use(express.json())

const checkAuth = function (req, res, next) {
    req.authStatus = true

    if (req.authStatus) {
        console.log('Está logado, pode continuar')
        next()
    } else {
        console.log('Não está logado, faça o login para continuar')
        next()
    }
} 

app.use(checkAuth)

app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

app.get('/users', users)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})
