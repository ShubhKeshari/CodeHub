const fs = require("fs");

// make the validator function and export it.

const customValidator = (req, res, next) => {
  const data = req.body;

  //   console.log("in middleware");

  const { ID, Name, Rating, Description, Genre, Cast } = data;

  //   console.log(ID);
  //   console.log(Name);
  //   console.log(Rating);
  //   console.log(Description);
  //   console.log(Genre);
  //   console.log(Cast);

  //   console.log("data destructured");

  if (ID && Name && Rating && Description && Genre && Cast) {
    const fileName = "res.txt";

    // console.log("all data present");

    fs.writeFileSync(fileName, "");

    if (
      typeof ID === "number" &&
      typeof Name === "string" &&
      Name.match(/\d+/g) === null &&
      typeof Rating === "number" &&
      typeof Description === "string" &&
      typeof Genre === "string" &&
      Array.isArray(Cast) &&
      Cast.filter((cast) => {
        return typeof cast === "number" || cast.match(/\d+/g) !== null;
      }).length === 0
    ) {
      //   console.log("all data verified");

      fs.appendFileSync(fileName, "ID is a number\n");
      fs.appendFileSync(fileName, "Name is a string\n");
      fs.appendFileSync(fileName, "Rating is a number\n");
      fs.appendFileSync(fileName, "Description is a string\n");
      fs.appendFileSync(fileName, "Genre is a string\n");
      fs.appendFileSync(fileName, "Cast is a array of string\n");

      next();
    } else {
      //   console.log("some data not verified");

      fs.appendFileSync(fileName, "bad request.some data is incorrect.\n");

      res.status(400).send("bad request.some data is incorrect.");
    }

    // if (typeof Name == String && Name.match(/\d+/g) == null) {
    //   fs.appendFileSync(fileName, "Name is a string\n");
    // } else {
    //   fs.appendFileSync(fileName, "bad request.some data is incorrect.\n");

    //   res.status(400).send("bad request.some data is incorrect.");
    // }

    // if (typeof Rating == Number) {
    //   fs.appendFileSync(fileName, "Rating is a number\n");
    // } else {
    //   fs.appendFileSync(fileName, "bad request.some data is incorrect.\n");

    //   res.status(400).send("bad request.some data is incorrect.");
    // }

    // if (typeof Description == String) {
    //   fs.appendFileSync(fileName, "Description is a string\n");
    // } else {
    //   fs.appendFileSync(fileName, "bad request.some data is incorrect.\n");

    //   res.status(400).send("bad request.some data is incorrect.");
    // }

    // if (typeof Genre == String) {
    //   fs.appendFileSync(fileName, "Genre is a string\n");
    // } else {
    //   fs.appendFileSync(fileName, "bad request.some data is incorrect.\n");

    //   res.status(400).send("bad request.some data is incorrect.");
    // }

    // if (
    //   Array.isArray(Cast) &&
    //   Cast.filter((cast) => cast.match(/\d+/g) != null).length == 0
    // ) {
    //   fs.appendFileSync(fileName, "Cast is a array of string\n");
    // } else {
    //   fs.appendFileSync(fileName, "bad request.some data is incorrect.\n");

    //   res.status(400).send("bad request.some data is incorrect.");
    // }
  } else {
    // console.log("all data not present");

    res.status(400).send("invalid request body.");
  }
};

module.exports = { customValidator };
