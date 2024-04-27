const express = require("express");
const app = express();
const { connection } = require("./config/db");
const {userRouter} = require("./route/user.route");

const  port = 5500;
app.use(express.json())


app.use("/users", userRouter);
app.get("/", (req,res)=>{
    res.status(200).send("Welcome to Home Page")
});
const server = app.listen(port,async()=>{
    try{
        await connection;
        console.log("Connection is Up!");
        console.log(`Server is running on http://localhost:${port}`)
    }catch(err){
        console.log("Connection Failed with Database")
    }
});

module.exports = {
    server
}