const express = require('express');
 const  port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
  res.send("Heeloo express");
})

app.get('/home',(req,res)=>{
  res.send("Heeloo express");
})

app.get('/about',(req,res)=>{
  res.send('<h1>About </h1>');
})



app.listen(port,()=>{
  console.log('Server is running on '+port);
})
