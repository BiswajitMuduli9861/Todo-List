const express = require('express')
const {signUp, login} = require('../controller/controller');
const { addList, readList, updateList, deleteList, completedList, clearAllTasks, deleteUser} = require('../controller/todolist');
const { authenticate } = require('../middleware/authenticate');


const router = express.Router();

router.post("/signup", signUp)
router.post("/login", login)

//Todo List Route
router.post("/addlist",authenticate, addList)
router.get("/readlist/:id",authenticate, readList)
router.put("/updatelist/:id/:taskId",authenticate, updateList)
router.put("/completed/:id/:taskId",authenticate, completedList)
router.delete("/deletelist/:id/:taskId",authenticate, deleteList)
router.delete("/todo/clear/:id", clearAllTasks);
router.delete("/user/delete/:id", deleteUser);


module.exports = router