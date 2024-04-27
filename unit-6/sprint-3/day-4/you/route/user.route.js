const express = require("express");
const userRouter = express.Router();
const {UserModel} = require("../model/user.model");


userRouter.get("/", async (req, res) => {
    try {
        // Retrieve all users from the database
        const users = await UserModel.find();

        // Respond with the list of users
        res.status(200).json(users);
    } catch (error) {
        // Handle database or server errors
        console.error("Error fetching users:", error);
        res.status(500).send("Internal Server Error");
    }
});
userRouter.get("/:id", async (req, res) => {
    try {
        // Retrieve the user by ID from the database
        const userId = req.params.id;
        const user = await UserModel.findById(userId);

        // Check if the user exists
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Respond with the user
        res.status(200).json(user);
    } catch (error) {
        // Handle database or server errors
        console.error("Error fetching user:", error);
        res.status(500).send("Internal Server Error");
    }
});



module.exports = {
    userRouter
}