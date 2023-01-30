var createError = require('http-errors');
var express = require('express');
var path = require('path');

const bodyparser=require("body-parser");

const { check, validationResult }
    = require('express-validator');
 
var PORT = process.env.port || 3000

var app = express();
app.use('/abc',express.static('public'));
app.set('view engine','twig');
app.set('views','./public/views');
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.get('/about',(req,res)=>{
  res.render('about/:a-:b',{title:"About",sum:res.params.a+res.params.b});
})
app.get("/",(req,res)=>{
  res.render('index.ejs',{title:"Login Form",message:"Enter username and password"});
});
app.post('/',(req,res)=>{
  res.render('login.twig',{title:"Users Details",username:req.body.username,password:req.body.password})
})
/*app.get("/",(req,res)=>{
    res.render('index.twig',{title:"Twig",message:"Twig tutorial"});
    
});*/
app.get('/about/:a-:b',(req,res)=>{
res.render('about.twig',{title:"About",sum:parseInt(req.params.a)+parseInt(req.params.b)});
});
app.get("/users:Id",(req,res)=>{
    res.send("Users Data accesed"+req.params.Id);
});
app.get("/flights/:From?.:To?",(req,res)=>{
  res.send("Search for flights: "+"From:"+req.params.From+"To:"+req.params.To);
})
app.set("view engine", "ejs")
 
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
 
app.get("/", function (req, res) {
    res.render("index.ejs");
})
 
// check() is a middleware used to validate
// the incoming data as per the fields
app.post('/saveData', [
    check('email', 'Email length should be 10 to 30 characters')
                    .isEmail().isLength({ min: 10, max: 30 }),
    check('name', 'Name length should be 10 to 20 characters')
                    .isLength({ min: 10, max: 20 }),
    check('mobile', 'Mobile number should contains 10 digits')
                    .isLength({ min: 10, max: 10 }),
    check('password', 'Password length should be 8 to 10 characters')
                    .isLength({ min: 8, max: 10 })
], (req, res) => {
 
    // validationResult function checks whether
    // any occurs or not and return an object
    const errors = validationResult(req);
 
    // If some error occurs, then this
    // block of code will run
    if (!errors.isEmpty()) {
        res.json(errors)
    }
 
    // If no error occurs, then this
    // block of code will run
    else {
        res.send("Successfully validated")
    }
});
 

app.set('views', path.join(__dirname, 'views'));



module.exports = app;
