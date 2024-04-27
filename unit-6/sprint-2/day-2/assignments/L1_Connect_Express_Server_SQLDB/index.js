
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/dbConfig");
const { Movie } = require("./model/movie.model");
const app = express();
// Import the mysql2 library
const mysql = require('mysql2');

// Create a connection pool
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Shubham@3",
    database: "movieManagement"
});

// SQL command to create a table
const createTableSql = `
    CREATE TABLE IF NOT EXISTS movies (
        id INT AUTO_INCREMENT PRIMARY KEY,
        image VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        rating DOUBLE NOT NULL
    )
`;

// Execute the SQL command to create the table
connection.query(createTableSql, (err, results) => {
    if (err) {
        console.error('Error creating table:', err);
    } else {
        console.log('Table created successfully:', results);
    }
    
    // Close the connection pool
    connection.end();
});
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.post("/movie", async(req,res)=>{
    const { image, title, rating } = req.body;
    try {
        const movie = await Movie.create({ image, title, rating });
        return res.status(200).send({ error : false, items : movie });
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
})

app.get("/movie", async(req,res)=>{
    try {
        const movies = await Movie.findAll();
        return res.status(200).send({ error : false, items : movies });
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
})

app.patch("/movie/:id", async(req,res)=>{
    const { id } = req.params;
    const { image,title,rating } = req.body;

    try {
        const isUserUpdated = await Movie.update({ image,title,rating }, {
            where : {
                id
            }
        });  
        return res.status(200).send({ error : false, items : isUserUpdated });
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
})

app.delete("/movie/:id", async(req,res)=>{
    const { id } = req.params;
    try {
        const isMovieDeleted = await Movie.destroy({  
            where : {
                id : Number(id)
            }
        })
        return res.status(200).send({ error : false, items : isMovieDeleted });
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
})

app.listen(8080, async() => {
    await sequelize.authenticate();
    console.log("connected to Database")
  console.log("Server is running at port 8080");
});