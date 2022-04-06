const express = require("express");
const jwt = require("jsonwebtoken");
const {checkApiKey} = require('./middlewares/auth.handler')



const app = express();



app.get("/api", checkApiKey, (req, res)=>{
    res.send("NodeJS JWT");

})


//jwt.sign nos asigna un token
//Consultar el expiresIn en la pagina oficial https://jwt.io/
app.post("/api/login", (req, res)=>{
    const user = {
        id: 1,
        nombre:"Mau",
        mail:"mau@gmail.com"
    }

    jwt.sign({user},'secretKey', {expiresIn: '32s'},  (err,token) => {
        res.json({
            token
        })
    })
})


app.post("/api/posts", verifyToken, (req, res)=>{
    jwt.verify(req.token, 'secretKey', (error, authData) =>{
        if(error){
            res.sendStatus(403);
        }else{
            res.json({
                mensaje: "Post fue creado",
                authData
            })
        }
    })
})



//Authorization: Bearer <token> , funcion para verificar el token
function verifyToken(req, res, next){
  const bearerHeader = req.headers['authorization']
  if(typeof bearerHeader !== 'undefined'){
     const  bearerToken = bearerHeader.split(" ")[1];
     req.token = bearerToken;
     next();
  }else{
      res.sendStatus(403);
  }
}


  


app.listen(3000, function(){
    console.log("Node js running");
})

