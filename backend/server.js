const express = require('express')
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const path = require('path');
app.use(cookieParser())
app.use(express.json()); 
app.use(cors({
  origin: 'https://todo-list-5jui.onrender.com/', 
  credentials: true               
}));
const _dirname = path.resolve();
// console.log(_dirname)


dotenv.config();
const route = require('./routes/route')


const connection = require("./db/db");
connection();




app.use('/av1', route)
app.use(express.static(path.join(_dirname, '/todo_list/dist')));
app.get('/{*any}', (req,res) =>{
    res.sendFile(path.resolve(_dirname, 'todo_list', 'dist', 'index.html'));
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
  console.log("Server is running on port 5000");
})