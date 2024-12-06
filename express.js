const express = require('express')
const morgan = require('morgan')//Third-party middleware:
const app = express()//to use express you need to first call the express:
const port = 5000
const dbconnection = require('./config/db')//importing connection
const userModel = require('./models/user')//importing the userModel from models:

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

//..................................CRUD Operations...........................
//1.Create:
//use to render register page:
app.get('/register', (req, res) => {
    res.render('register')
})

//use to send data to server:
app.post('/register', async (req, res) => {
    // console.log(req.body)
    const { username, email, password } = req.body;
    const newUser = await userModel.create({
        username: username,
        email: email,
        password: password
    })
    console.log(newUser)
    res.send("User Created")
    // res.send(newUser)
})

//2.Read:
app.get("/get-users", (req, res) => {
    userModel.find({
        // username:'house'
    }).then((user) => {
        // console.log(user)
        res.send(user)
    })
})
//3.Update:
app.get("/update-user", async (req, res) => {
    const user = await userModel.findOneAndUpdate({ password: 'dd' }, { email: 'dp@dp.com' })
    res.send("User updated")
    console.log(user)
})


app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})
