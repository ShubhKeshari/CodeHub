const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.route");
const app = express();
require("dotenv").config();

const  port = process.env.PORT||8080;
app.get("/", (req,res)=>{
    res.status(200).send("Welcome to Home Page")
});
app.use("/users", userRouter);

app.listen(port,async()=>{
    try{
        await connection;
        console.log("Connection is Up!");
        console.log(`Server is running on http://localhost:${port}`)
    }catch(err){
        console.log("Connection Failed with Database")
    }
})
