// import required modules

const express = require("express");

const fs = require("fs");
const path = require("path");

var morgan = require("morgan");

const port = 8080;
const app = express();

// Method,
// Status,
// Content-Length,
// Time-Taken,
// Date,
// HTTP Version,
// URL accessed,
// New Line at the end

// output should look like -
// -  GET 200 43 3.307 ms Fri, 10 Mar 2023 04:06:43 GMT 1.1 /get-users

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

app.use(
  morgan(
    ":method :status :res[content-length] :response-time ms :date[web] HTTP/:http-version :url \n",
    { stream: accessLogStream }
  )
);

// GET - /
// GET - /get-users
// POST- /add-user
// PUT - /user/:id
// DELETE - /user/:id

app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to server" });
});

app.get("/get-users", (req, res) => {
  res.status(200).json({ message: "here is the list of all users" });
});

app.post("/add-user", (req, res) => {
  res.status(201).json({ message: "user added successfully" });
});

app.put("/user/:id", (req, res) => {
  const { id } = req.params;

  res.status(201).json({ message: `user ${id} updated successfylly` });
});

app.delete("/user/:id", (req, res) => {
  const { id } = req.params;

  res.status(200).json({ message: `user ${id} deleted successfylly` });
});

app.listen(port, () => {
  console.log(`Server is running at port : ${port}`);
});

module.exports = app;

// export the server
// eg.module.exports = app;
