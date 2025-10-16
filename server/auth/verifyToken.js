import User from "../model/User.model.js"
import jwt from "jsonwebtoken"

export const authorize = (req, res, next)=>{
 const authToken = req.headers.authorization; // we will get the token from the headers of the request.

 //if we don't have token in the headers then we will return 401 unauthorized error.
 if(!authToken || !authToken.startsWith("Bearer")){
    return res.status(400).json({success: false, message: "Unauthorized access, token missing"})
 }
 try {
    const token = authToken.split(" ")[1]; 

    //token verification
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY) 
     req.userId = decoded.id ; 
     req.role = decoded.role; 
     req.name = decoded.name;
     next()
 } catch (error) {
    if(error.name === "TokenExpiredError"){
        return res.status(401).json({success: false, message: "Token expired, please login again"})
    } else {
        return res.status(401).json({success: false, message: "Invalid token, authorization failed"})
    }
 }
}