import mongoose from "mongoose";
import User from "../model/User.model";
import bcrypt from "bcryptjs"


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

