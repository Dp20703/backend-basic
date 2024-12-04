const express = require('express')
const morgan = require('morgan')//Third-party middleware:
const app = express()//to use express you need to first call the express:

//view engine:ejs for rendering html pages
app.set('view engine', 'ejs')

//middleware:
//1.Third-party middleware:
app.use(morgan('dev'))
//2.Custom middleware:
app.use((req, res, next) => {
    console.log("This is middleware")
    // res.send('this is middleware')
    return next()
})

//3.Built-in middleware:
//used for read the body of request in POST method:
app.use(express.json())
app.use(express.urlencoded({ extends: true }))
app.use(express.static("public"))

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

app.post('/get-form-data', (req, res) => {
    console.log(req.body);
    res.send("Data received")
})
app.listen(3000)