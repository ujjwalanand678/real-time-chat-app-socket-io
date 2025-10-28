import express from "express"
import { checkAuth, updateProfile, userLogin, userSignUp } from "../controller/User.controller";
import { authorize } from "../auth/verifyToken";

const route = express.Router();

//http://localhost:3000/api/auth/signup
route.post("/signup" , userSignUp)

//http://localhost:3000/api/auth/login
route.post("/login" , userLogin)

//http://localhost:3000/api/auth/update-profile
route.put("/update-profile" , authorize ,  updateProfile)

//http://localhost:3000/api/auth/check
route.get("/check" ,authorize, checkAuth)




export default route