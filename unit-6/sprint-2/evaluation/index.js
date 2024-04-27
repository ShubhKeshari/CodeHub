const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./src/config/db");
const userRouter = require("./src/routes/user.routes");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome to home page!");
});

app.use("/user", userRouter);
app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    console.log(`Server is runnig at http://localhost:${port}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
