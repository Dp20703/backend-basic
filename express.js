const express = require('express')
const morgan = require('morgan')//Third-party middleware:
const app = express()//to use express you need to first call the express:

//view engine:ejs for rendering html pages
app.set('view engine', 'ejs')

//middleware:
//Third-party middleware:
app.use(morgan('dev'))
//Custom middleware:
app.use((req, res, next) => {
    console.log("This is middleware")
    // res.send('this is middleware')
    return next()
})

//routes:
app.get('/', (req, res, next) => {
    console.log("home page middleware")
    next()
}, (req, res) => {
    res.render('index')//rendering html page index
})
app.get('/about', (req, res) => {
    res.send('About Page')
})
app.get('/contact', (req, res) => {
    res.send('Contact Page')
})
app.listen(3000)