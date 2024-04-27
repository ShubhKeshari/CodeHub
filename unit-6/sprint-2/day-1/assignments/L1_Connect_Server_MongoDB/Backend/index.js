const express = require('express');
const mongoose = require('mongoose');
const { movieModel} = require("./movieSchema");
const app = express();
const cors = require('cors');
const port = 4500;
app.use(cors());
app.use(express.json());
app.get('/', async(req, res) => {
  res.send('Welcome to movie page!');
});

app.post("/movie", async(req, res) => {
    const {title, image,rating} = req.body;
    console.log(req.body);
    try{
        const movie = new movieModel({ title, image,rating });
        await movie.save();
        res.status(200).json(movie);
    }catch(err){
        console.log(err);
        res.status(500).send({error:true, message:err})
    }
});
app.get("/movie", async(req, res) => {
    try{
        const movieData = await movieModel.find();
        res.status(200).send({error:false, items: movieData});
    }catch(err){
        console.log(err);
        res.status(500).send({error:true, message:err})
    }
});

app.patch('/movie/:id',async(req,res)=>{
    const {id} = req.params;
    const {title, image,rating} = req.body;
    try{
        const movie = await movieModel.findByIdAndUpdate(id,
            {title, image,rating},
            {new:true} // Return the updated document
        );
        res.status(200).json(movie);
    }catch(err){
        console.log(err);
        res.status(500).send({error:true, message:err})
    }
})

app.delete('/movie/:id',async(req,res)=>{
    const{id} = req.params;
    try{
        const movie = await movieModel.findByIdAndDelete(id);
        console.log(movie);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        await movie.deleteOne();
        
        res.json({ message: 'Movie deleted successfully' });
        
    }catch(err){
        console.log(err);
        res.status(500).send({error:true, message:err})
    }
})

app.listen(port, async() => {
  mongoose.connect("mongodb://localhost:27017/movieDB");
  console.log(`App is running on port ${port}!`);
});