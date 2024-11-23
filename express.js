const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.send('About Page')
})
app.get('/contact', (req, res) => {
    res.send('Contact Page')
})
app.listen(3000)