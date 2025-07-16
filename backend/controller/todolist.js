
const todoModel = require('../models/todoModel');
const  userModel= require('../models/model');


const addList = async (req, res) => {
    const { userId, email, addList } = req.body;

    if (!addList) {
        return res.status(422).json({ status: 422, message: "Bad Request", error: "All fields are required" });
    }

    try {
        // Check for existing todo with same email
        const existing = await userModel.findOne({ email });

        if (!existing) {
            return res.status(404).json({ status: 409, message: "Email Not Found" });
        }

        const newTodo = new todoModel({ userId, email, addList });
        const savedTodo = await newTodo.save();

        res.status(201).json({ status: 201, message: "Todo added successfully", data: savedTodo });

    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal Server Error", error: err.message });
    }
};


const readList = async(req,res) =>{
    const email =req.params.email;
    if(!email){
        return res.status(422).json({ status: 422, message: "Bad Request", error: "Email is required" });
    }
    try {
        const todoList = await todoModel.find({email});
        return res.status(200).json({ status: 200, message: "Success", data: todoList });
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal Server Error", error: error.message });
    }
    
}
const updateList = async(req,res) =>{
    const {addList} = req.body;
    const list_id = req.params.id;
    if(!addList){
        return res.status(422).json({ status: 422, message: "Bad Request", error: "All fields are required" });
    }
    try {
        const updatedTodo = await todoModel.findByIdAndUpdate(list_id, {addList}, {new: true});
        if(!updatedTodo) {
            return res.status(404).json({ status: 404, message: "Not Found", error: "Todo item not found" });
        }
        await updatedTodo.save();
        return res.status(200).json({ status: 200, message: "Success", data: updatedTodo });
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal Server Error", error: error.message });
    }
}
const deleteList = async(req,res) =>{
    const list_id = req.params.id;
    if(!list_id){
        return res.status(422).json({ status: 422, message: "Bad Request", error: "Email and ID are required" });
    }
    try {
        const deletedTodo = await todoModel.findByIdAndDelete(list_id);
        if(!deletedTodo) {
            return res.status(404).json({ status: 404, message: "Not Found", error: "Todo item not found" });
        }
        return res.status(200).json({ status: 200, message: "Success", data: deletedTodo });
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Internal Server Error", error: error.message });
    }
}


module.exports = {addList,readList, updateList, deleteList}