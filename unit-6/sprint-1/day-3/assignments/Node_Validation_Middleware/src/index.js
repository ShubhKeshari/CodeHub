//  import required modules from nodejs and build the server

const express = require("express");
const { customValidator } = require("./middlewares/validator");

const port = 8080;
const app = express();

app.use(express.json());

app.use(customValidator);

app.post("/", (req, res) => {
  // console.log(req.body);
  res.status(200).send("data received");
});

app.listen(port, () => {
  console.log(`Server is running at port : ${port}`);
});

// export the server

module.exports = app;
