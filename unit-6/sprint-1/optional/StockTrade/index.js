const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
app.use(express.text());
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});

//API to post trade data
app.post("/trades", (req, res) => {
  fs.readFileSync("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      const tradesData = JSON.parse(data);
      const trade_Data = tradesData.trades;
      const obj = req.body;
      obj.id = trade_Data.length + 1;
      trade_Data.push(obj);
      fs.writeFileSync("./db.json", JSON.stringify(trade_Data), (err) => {
        if (err) {
          res.send(err);
        } else {
          res.send("New data added successfully");
        }
      });
    }
  });
});

//API to get trades data
app.get("/trades", (req, res) => {
  //Asyncronously read the data
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      //if error send us the error
      res.send(err);
    } else {
      //convert in to normal data from json data
      const tradeData = JSON.parse(data);
      //Give us the response
      res.send(tradeData.trades);
    }
  });
});

//API to get trade data based on the given param
app.get("/trades/:id", (req, res) => {
  try {
    const tradesData = JSON.parse(fs.readFileSync("./db.json", "utf-8")).trades;
    
    const trade = tradesData.filter((item) => {
        console.log(item.id);
      return item.id === parseInt(req.params.id);
    });
    console.log(trade);
    if (trade) {
      //if we found the object will return
      res.status(200).json(trade);
    } else {
      //If id is not present then this msg
      res.status(404).send("ID not found");
    }
   
    
  } catch (error) {
    res.status(500).send({ error });
  }
});

//Delete Data
