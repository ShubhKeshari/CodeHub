const express = require("express");
const app = express();
const { connection } = require("./config/db");
const {userRouter} = require("./route/user.route");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const  port = 8080;
app.use(express.json())


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);
app.use('/apidocs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.use("/users", userRouter);
app.get("/", (req,res)=>{
    res.status(200).send("Welcome to Home Page")
});
app.listen(port,async()=>{
    try{
        await connection;
        console.log("Connection is Up!");
        console.log(`Server is running on http://localhost:${port}`)
    }catch(err){
        console.log("Connection Failed with Database")
    }
})