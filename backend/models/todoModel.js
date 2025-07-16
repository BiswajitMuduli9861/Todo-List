const mongoose = require('mongoose');

const todolistSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    addList:{
        type: String,
        required: true
    }
    
   

},{timestamps:true})
const todoModel = mongoose.model('Todolist', todolistSchema);
module.exports = todoModel;