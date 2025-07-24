const userModel = require('../models/model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');





const signUp = async (req, res) => {
    try {
        
        // console.log(req.body)
        const { fullName, email, password} = req.body;
        if (!fullName || !email || !password) {
            return res.status(422).json({ status: 422, message: "Bad Request", error: "All fields are required" });
        }
        const userExists = await userModel.findOne({ email });
        if (userExists) {
            return res.status(409).json({ status: 409, message: "Conflict", error: "User already exists" });
        }
        const hashPassword =await bcrypt.hash(password,10);
        const newUser = new userModel({ fullName, email, password:hashPassword});
        await newUser.save(); 
       
        res.status(201).json({ status: 201, message: "User created successfully", data: { fullName, email } });

    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal Server Error", error: err.message });
    }
}

const login = async(req,res) =>{
    try {

        const {email,password} = req.body;
        
        if(!email || !password){
            return res.status(422).json({ status: 422, message: "Bad Request", error: "All fields are required" });
        }
        const userExist = await userModel.findOne({email:email})
        if(!userExist){
        return res.status(401).json({message:"Invalid Credential"})
    }
    const passwordMatch = await bcrypt.compare(password, userExist.password)
    if(!passwordMatch){
        return res.status(401).json({message:"Invalid Credential"})
    }
    
    const token = jwt.sign({email} , process.env.jwt_secrentKey,{expiresIn:"1h"})
    // console.log(token)
    res.cookie("jsontoken", token, {
          httpOnly: true,
          secure: true,       
          sameSite: "Strict", 
          maxAge: 60 * 60 * 1000, 
        });
        
        
        res.status(200).json({message:"User login successfully",UserId:userExist._id,UserEmail:userExist.email, token:token})
    } catch (error) {
           res.status(500).json({ status: 500, message: "Internal Server Error", error: error.message });
    }
}



module.exports = {signUp, login}