const express = require('express')
const exphbs = require('express-handlebars')
const app = express()


const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {
    const items = ['item a', 'item b', 'item c']

    res.render('dashboard', { items })
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Node.js...',
        comments: 4,
    }

    res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: "Aprender Node.js",
            category: "JavaScript",
            body: "Teste",
            comments: 4
        },
        {
            title: "Aprender CSharp",
            category: "CSharp",
            body: "Teste",
            comments: 4
        },
        {
            title: "Aprender JavaScript",
            category: "JavaScript",
            body: "Teste",
            comments: 4
        }
    ]
    res.render('blog', { posts })
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