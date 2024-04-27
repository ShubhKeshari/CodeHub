const express = require('express');

const app = express();

const port = 4500;

app.use(express.json());

app.listen(port, (req,res)=>{
    try{
        
    }catch(err){
        console.log(err);
    }
})