import jwt from "jsonwebtoken"
export const createJwtToken = (user)=>{
const token = jwt.sign({id : user._id , role: user.role, name: user.name}, process.env.JWT_TOKEN_KEY,{expiresIn: "1d"}) 
return token;
}