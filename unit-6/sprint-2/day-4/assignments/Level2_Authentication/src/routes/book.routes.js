const express = require('express');

const bookModel = require("../models/book.model");

const bookRouter = express.Router();

bookRouter.get("/", async(req, res) => {
    console.log(Date.now());
    console.log(req.query);
    const page = req.query.page || 1;
    const size = req.query.size || 10;

    const skip = (page - 1) * size;
                //1-1*10 = 0
                // (2-1)*10 = 10
                // (3-1)*10 = 20 
    try{
        const query = {};
        if(req.query.name){
            query.name = req.query.name;
        }
        if(req.query.price){
            query.price = {$gte:req.query.price};
        }
        const total_books = await bookModel.find(query).countDocuments();

        const books = await bookModel.find(query).skip(skip).limit(size);
        res.status(200).json({
            currentPage:page,
            totalBooks: total_books,
            pageSize:size,
            total_pages:Math.ceil(total_books/size),
            books:books
        });

    }catch(err){
        res.status(400).send(err.message);
    }
});

bookRouter.post("/", async(req, res) => {
    const {name, author,publishDate,genre } = req.body;
    try{
        const books = new bookModel({name, author,publishDate,genre});
        await books.save();
        res.status(200).send("book is created successfully");

    }catch(err){
        res.status(400).send(err.message);
    }
})

bookRouter.get("/:id", async(req, res) => {
    try{
        const books = await bookModel.find({_id: String(req.params.id)});
        res.status(200).send(books);

    }catch(err){
        res.status(400).send(err.message);
    }
});

bookRouter.patch("/:id", async(req, res) => {
    const {name, author,publishDate,genre } = req.body;
    try{
        const single_book = await bookModel.findById(String(req.params.id));
        if(!single_book){
            return res.status(400).send("no book found try to check the book id");
        }
        if(single_book.author == req.user._id){
            const single_book = await bookModel.findByIdAndUpdate(String(req.params._id),req.body,{ new: true });
        }
        res.status(200).send("Book updated successfully");

    }catch(err){
        res.status(400).send(err.message);
    }
});


bookRouter.delete("/:id", async(req, res) => {
    const {name, author,publishDate,genre } = req.body;
    try{
        const single_book = await bookModel.findById(String(req.params.id));
        if(!single_book){
            return res.status(400).send("no book found try to check the book id");
        }
        if(single_book.author == req.user._id){
            const single_book = await bookModel.findByIdAndDelete(String(req.params._id));
        }
        res.status(200).send("Book deleted successfully");

    }catch(err){
        res.status(400).send(err.message);
    }
})

module.exports = bookRouter;