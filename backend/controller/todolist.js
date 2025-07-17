
const todoModel = require('../models/todoModel');


const addList = async (req, res) => {
    const { userId, tasks } = req.body;
    // console.log(req.body)

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
    // console.log(userId)
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
    const userId = req.params.id;
    const taskId = req.params.taskId;
    const {newTask} = req.body
     try {
    const todo = await todoModel.findOne({ userId });

    if (!todo) return res.status(404).json({ message: "Todo not found" });

    if (taskId < 0 || taskId >= todo.tasks.length) {
      return res.status(400).json({ message: "Invalid index" });
    }

    // Update specific task
    todo.tasks[taskId].task = newTask;
    await todo.save();

    res.status(200).json({ message: "Task updated", tasks: todo.tasks });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}
const deleteList = async (req, res) => {
  const userId = req.params.id;
  const taskId = req.params.taskId;

  try {
    const user = await todoModel.updateOne(
      { userId },
      { $pull: { tasks: { _id: taskId } } }
    );

    if (user.modifiedCount === 0) {
      return res.status(404).json({ message: "Task not found or already deleted" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


const completedList = async(req,res) =>{
    const taskId = req.params.taskId;
    const userId = req.params.id;
    const {completed} = req.body;
    try {
        const user = await todoModel.updateOne(
            {userId, "tasks._id": taskId},          //"tasks._id": taskId matlab hai ki jab . lagaoge tabuse karna "tasks._id"
            {
                $set: {
                "tasks.$.completed": completed,
                },
            }
        ); 
          res.status(200).json({ message: "Task updated successfully", data: user });
    } catch (error) {
     res.status(500).json({ message: "Server error", error: error.message });   
    }

}


module.exports = {addList,readList, updateList, deleteList, completedList}