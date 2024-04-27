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

// POST create a new user
userRouter.post("/", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Create a new user instance
        const newUser = new UserModel({ username, password });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Respond with the created user
        res.status(201).json(savedUser);
    } catch (error) {
        // Handle validation errors and database errors
        console.error("Error creating user:", error);
        res.status(400).send("Bad Request");
    }
});

// PATCH update an existing user by ID
userRouter.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { username, password } = req.body;

    try {
        // Find the user by ID and update the fields
        const updatedUser = await UserModel.findByIdAndUpdate(id, { username, password }, { new: true });

        if (!updatedUser) {
            return res.status(404).send("User not found");
        }

        // Respond with the updated user
        res.status(200).json(updatedUser);
    } catch (error) {
        // Handle database or server errors
        console.error("Error updating user:", error);
        res.status(500).send("Internal Server Error");
    }
});

// DELETE delete an existing user by ID
userRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        // Find the user by ID and delete it
        const deletedUser = await UserModel.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).send("User not found");
        }

        // Respond with a success message
        res.status(200).send("User deleted successfully");
    } catch (error) {
        // Handle database or server errors
        console.error("Error deleting user:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = {
    userRouter
}