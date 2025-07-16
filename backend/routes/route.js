const express = require('express')
const {signUp, login} = require('../controller/controller');
const { addList, readList, updateList, deleteList } = require('../controller/todolist');
const { authenticate } = require('../middleware/authenticate');


const router = express.Router();

router.post("/signup", signUp)
router.post("/login", login)

//Todo List Route
router.post("/addlist", authenticate, addList)
router.get("/readlist/:email",  authenticate, readList)
router.put("/updatelist/:id",  authenticate, updateList)
router.delete("/deletelist/:id",  authenticate, deleteList)

module.exports = router