const express = require('express');
const { connection } = require('./src/config/db');
require("dotenv").config();
const userRouter = require('./src/routes/user.routes');

const app = express();

app.use(express.json());

const port = process.env.PORT || 9090;

app.get('/', (req, res) =>{
    res.send("This is Home Page");
});

app.use('/users',userRouter);
//app.use("/books",auth, bookRouter);
app.listen(port, async()=>{
    try{
        await connection();
        console.log("Server is connected to mongodb");
        console.log(`Server is running on port http://localhost:${port}`)
    }catch(error){
        console.log(error);
    }
})