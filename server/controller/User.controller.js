import mongoose from "mongoose";
import User from "../model/User.model";
import bcrypt from "bcryptjs"
import { createJwtToken } from "../library/utils";
import cloudinary from "../library/cloudinary.js";

//controller for user signup
export const userSignUp = async (req, res, next) => {
  const { fullName, email, password, bio } = req.body;
  try {
    // all fields are required for signup
    if (!fullName || !email || !password || !bio) {
      return res
        .satatus(400)
        .json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({
        success: false,
        message:
          "User already registered, you cannot register again with same email.",
      });
    }

    //pasword encryption
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    //now create new user
   user = new User({fullName, email, password : hashedPassword , bio})
   await user.save();
   return res
      .status(200)
      .json({ success: true, message: "User registered successfully" , userData : user});
   
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

//controller for user login
export const userLogin = async (req,res,next) => {
const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not registered" });
    }
    const comparePassword = await bcrypt.compare(
      password,
      user.password
    ); // it will compare the plain text password with the hashed password and return true or false.
    if (!comparePassword) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid password" });
    }
    const token = createJwtToken(user)
    const { password: hashedPassword, role, ...rest}= user._doc; 
   
    return res
      .status(200)
      .json({ success: true, message: "User logged in successfully" , token , role, data: rest});
  } catch (error) {
     console.error("Login Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const checkAuth = async (req, res)=>{
  res.json(200).json({success:true , user : req.user})
}
 
//controller to update user profile details
export const updateProfile = async (req,res ,next)=>{
  try {
  const { fullName, profilePic, bio } = req.body;
  
  const userId = req.user._id;
  let updatedUser;
  if(!profilePic){
    updatedUser = await User.findByIdAndUpdate(userId , {bio ,fullName}, {new :true})
  }else{
    const upload = await cloudinary.uploader.upload(profilePic);
    updatedUser = await User.findByIdAndUpdate(userId ,{profilePic:upload.secure_url , bio ,fullName}, {new : true})
  }
return res.status(200).json({success:true , message: "User updated successfully" , user: updatedUser})
} catch (error) {
  console.log(error.message)
  console.error("Update Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
}
}
