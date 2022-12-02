const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

app.get('/', (req, res) => {

    const date = new Date()
    const year = date.getFullYear()
    const user = {
        name: 'Johnny',
        surname: 'B.',
        age: year - 1991
    }

    const word = 'teste'

    const auth = true

    const approved = true

    res.render('home', { user: user, word, auth, approved })
})

app.listen(3000, () => {
    console.log('App funcionando!')
})