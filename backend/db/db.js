const mongoose = require('mongoose');

const connection = async () => {
    const DB = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.cvwkho7.mongodb.net/Todo_List?retryWrites=true&w=majority`;
    // const DB = "mongodb://localhost:27017/Todo_List"
    if (!DB) {
        console.error("MongoDB URI is not defined in environment variables.");
        return;
    }
    try {
        await mongoose.connect(DB)
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log(error);
    }
}
module.exports = connection;
