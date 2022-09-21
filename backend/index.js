const express = require("express");
const app = express();
const cors = require('cors')
const body = require('body-parser')
const crypto = require('crypto');
const port = 3001


app.use(cors())
app.use(body.json())

app.post("/login", (req, res) => {
  const registerUser = req.body
  const resulUser = users.findIndex((element)=>{
    return element.user === registerUser.user && element.password === registerUser.password
  
  })
  
  if(resulUser === -1){
     return res.status(403).send('usuario no existe')
  }
  res.jsonp({token: crypto.randomUUID()})

})

app.get("/", (req, res) => {
  res.send('hello there!')
})

const validateAutorization = ((req,res,next) =>{
  const autorization = req.headers
  if(req.headers.autorization){
     return next()
  }
  res.status(403).send('error')
}) 
  
app.get("/dashboard",validateAutorization ,(req, res, next) => {
  console.log(req.headers)
  const data = [{
    id: 1,
    titulo: "orders",
    texto: "new orders",
    valor: "100k",
    icon: "ArticleIcon"
}, {
    id: 2,
    titulo: "Followers",
    texto: "Follow up",
    valor: "300k",
    icon: "TwitterIcon"
}, {
    id: 3,
    titulo: "Sales",
    texto: "Revenue",
    valor: "30$USD",
    icon: "AttachMoneyRoundedIcon"
},]
  res.jsonp(data)
})

const users = [];
app.post("/register", (req, res)=> {
    const register = req.body;
    users.push(register)
    res.send('registro exitoso')
   
})
app.listen(port, () => {
  console.log("Server started at port 3000");
});