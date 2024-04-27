const mongoose = require('mongoose');

const blackListSchema = new mongoose.Schema({

    token:{type:String}
});


const blackListModel = mongoose.model('blacklist', blackListSchema);

module.exports = blackListModel;