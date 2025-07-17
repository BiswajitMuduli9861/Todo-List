const express = require('express')
const {signUp, login} = require('../controller/controller');
const { addList, readList, updateList, deleteList } = require('../controller/todolist');
const { authenticate } = require('../middleware/authenticate');


const router = express.Router();

router.post("/signup", signUp)
router.post("/login", login)

//Todo List Route
router.post("/addlist", addList)
router.get("/readlist/:id", readList)
router.put("/updatelist/:id", updateList)
router.delete("/deletelist/:id/:taskId", deleteList)

module.exports = router