
const todoModel = require('../models/todoModel');


const addList = async (req, res) => {
    const { userId, tasks } = req.body;
    console.log(req.body)

    if (!tasks) {
        return res.status(422).json({ status: 422, message: "Bad Request", error: "All fields are required" });
    }

    try {
        // Check for existing todo with same Id
        let todo = await todoModel.findOne({ userId });
        if(todo){
            todo.tasks.push(...tasks);
        }else{
            todo = new todoModel({ userId, tasks:tasks });
        }

        const savedTodo = await todo.save();
        res.status(201).json({ status: 201, message: "Todo added successfully", data: savedTodo });

    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal Server Error", error: err.message });
    }
};


const readList = async(req,res) =>{
    const userId =req.params.id;
    console.log(userId)
    if(!userId){
        return res.status(422).json({ status: 422, message: "Bad Request", error: "userId is required" });
    }
    try {
        const todo = await todoModel.findOne({userId});
        return res.status(200).json({ status: 200, message: "Success", data: todo });
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
    const userId = req.params.id;
    const taskId = req.params.taskId;
   try {
    const user = await todoModel.findOne({userId});

    if (!user) return res.status(404).json({ message: "User not found" });

    if (taskId < 0 || taskId >= user.tasks.length) {
      return res.status(400).json({ message: "Invalid index" });
    }

    // Remove task at index
    user.tasks.splice(taskId, 1);

    await user.save();

    res.status(200).json({ message: "Task deleted", tasks: user.tasks });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}


module.exports = {addList,readList, updateList, deleteList}