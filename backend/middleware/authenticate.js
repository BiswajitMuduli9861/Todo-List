const jwt = require("jsonwebtoken");
const userModel  = require("../models/model");


const authenticate = async(req, res, next) => {
    // console.log("cookies recived", req.cookies);
    try {
        
        
        const token = req.cookies.jsontoken;
        // console.log(token,11)
        if (!token) {
            return res.status(401).json({ message: "Unauthorized access token not access in cookies" });
        }
        const verifyToken = jwt.verify(token, process.env.jwt_secrentKey) 
        // console.log(verifyToken)
        const rootUser =await userModel.findOne({ email: verifyToken.email });
        if (!rootUser) {
            throw new Error("User not found");
        }
        req.token = token;
        req.rootUser = rootUser; 
        req.userId = rootUser._id; 
        
        
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized: No token provided", error: error.message });
        console.log(error)
    }
}

module.exports = {authenticate}