const express = require('express');

const userRouter = express.Router();
const UserModel = require('../model/user.model');
const bcrypt = require('bcrypt');
userRouter.post("/register",async(req,res)=>{
    const {username, email, password} = req.body;
    try{
        bcrypt.hash(password, 5,async(err,hash)=>{
            if(err){
                return res.status(400).json(err)
            }else{
                const user = new UserModel({username, email, password:hash})
                await user.save()
                res.status(201).json({msg:"A new user has been registered successfully"});
            }
            
        })
        

    }catch(err){
        res.status(400).json(err)
    }

})

userRouter.post("/login",(req,res)=>{
    //logic
    
})
module.exports = {
    userRouter
}