const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
},{
    versionKey:false
});
// Here collection name is movie, on the compass we can see movies collection
const movieModel = mongoose.model("movie",movieSchema);
module.exports = {
    movieModel
}