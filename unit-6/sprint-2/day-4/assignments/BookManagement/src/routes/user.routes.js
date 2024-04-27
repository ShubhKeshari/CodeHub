const express = require("express");

const userModel = require("../models/user.model");
const blacklistModel = require("../models/blacklist.model");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
require("dotenv").config();
userRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    //before creating the user, we have to check user is already present or not
    const user = await userModel.findOne({ email: email });
    if (user) {
      return res
        .status(400)
        .json({ message: "User already exists, try login" });
    }
    bcrypt.hash(password, 10, async (err, data) => {
      if (err) throw new Error(err.message);
      const newUser = new userModel({ username, password: data, email });
      await newUser.save();
      return res.status(201).json({ message: "user registered successfully" });
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    //First check user is present or not
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "User is not found, try login" });
    }
    //If user is present then match password with database
    bcrypt.compare(password, user.password, async (err, data) => {
      if (err) throw new Error(err.message);
      if (data) {
        //email and password matched
        const access_token = jwt.sign(
          { _id: user._id, email: user.email },
          process.env.secret,
          { expiresIn: "1h" }
        );
        const refresh_token = jwt.sign(
          { _id: user._id, email: user.email },
          process.env.secret,
          { expiresIn: "5min" }
        );
        return res.json({
          message: "user logged in successfully",
          accessToken: access_token,
          refreshToken: refresh_token,
        });
      } else {
        return res.status(400).json({ message: "password is incorrect" });
      }
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


userRouter.get("/logout",async(req,res)=>{
    const header = req.headers['authorization'];
    const token = header.split(" ")[1];
    try{
        if(!token){
            return res.status(400).json({message:"No token provided"});
        }
        const userToken = new blackListModel({token});
        await userToken.save();
        return res.status(201).json({message:"user logout successfully"});

    }catch(err){
        return res.status(400).json({ message: err.message });
    }
})

module.exports = userRouter;
