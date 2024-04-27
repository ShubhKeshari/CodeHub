const express = require("express");
const userRouter = express.Router();
const {UserModel} = require("../model/user.model");

userRouter.post("/register",async(req,res)=>{
    const {username, password, role} = req.body;
    try{
         

    }catch(err){
        res.status(500).send(err);
    }
});

userRouter.get("/login",(req,res)=>{
    //logic
    console.log("Login page")
    res.status(200).send("Welcome to login Page")
});
userRouter.post("/logout",(req,res)=>{
    //logic
});

module.exports = {
    userRouter
}