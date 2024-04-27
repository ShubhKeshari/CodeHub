const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    name:{type:String,required:true,unique:true},
    author:{type:String,required:true}, 
    // author: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    publishDate:{type:Date},
    genre:{type:String,required:true}
});


const bookModel = mongoose.model('books', bookSchema);

module.exports = bookModel;