const express = require('express');
const { connectToDB } = require('./src/config/db');
require("dotenv").config();
const userRouter = require('./src/routes/user.routes');
const bookRouter = require('./src/routes/book.routes');

const auth = require('./src/middlewares/auth');
const app = express();

app.use(express.json());

const port = process.env.PORT || 9090;

app.get('/', (req, res) =>{
    res.send("This is Home Page");
});

app.use('/user',userRouter);
app.use("/books",auth, bookRouter);
app.listen(port, ()=>{
    try{
        connectToDB(process.env.DB_URL);
        console.log("Server is connected to mongodb");
        console.log(`Server is running on port http://localhost:${port}`)
    }catch(error){
        console.log(error.message);
    }
    
})