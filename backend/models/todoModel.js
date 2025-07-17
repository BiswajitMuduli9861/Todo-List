const mongoose = require('mongoose');

const todolistSchema = new mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
tasks: [
    {
      task: { type: String},
      completed: { type: Boolean, default: false },
    }
  ]
}, { timestamps: true });
const todoModel = mongoose.model('Todolist', todolistSchema);
module.exports = todoModel;