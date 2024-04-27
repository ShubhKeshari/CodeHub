// import required modules

const express = require("express");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const app = express();

const port = 8080;

app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to server" });
});

app.post("/upload", upload.single("avatar"), (req, res) => {
  res.status(200).json({ message: "file uploaded successfully" });
});

app.listen(port, () => {
  console.log(`Server is running at port : ${port}`);
});

module.exports = app;

// export the server
// eg.module.exports = app;
