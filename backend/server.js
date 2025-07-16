const express = require('express')
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');
app.use(express.json()); // Add this line
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true               
}));



dotenv.config();
const route = require('./routes/route')


const connection = require("./db/db");
connection();




app.use('/av1', route)

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
  console.log("Server is running on port 5000");
})