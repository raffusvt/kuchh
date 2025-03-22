const express = require('express')
const app = express();
const morgan = require('morgan')
const dbConnection = require('./config/db');
const userModel = require('./models/user')
const infoModel = require('./models/login');


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.use(morgan('dev'))
// custom middleware
app.use((req, res, next) => {
    a =5;
    b=10; 
    console.log(a+b)
    return next();
})

app.set('view engine', 'ejs')
// kisi page ko show krne k liye
app.get('/',(req, res) =>{
    res.render('render')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login', async (req,res)=>{
    const infoUser = {username,email,password} = req.body
    await infoModel.create({
        username:username,
        email:email,
        password:password
    })
    res.send('new user login')
})


app.get('/register', (req,res) =>{
    res.render('register')
}) 
app.post('/register', async (req,res)=>{
    
    const newUser = { username,email,password} = req.body
    await userModel.create({
        username:username,
        email:email,
        password:password
    })
    res.render('index')
})
app.listen(3000,()=>console.log('server running on port 3000'))

// get route server se frontend tk le jane  k liye
// post route frontend se server tk le jane k liye






