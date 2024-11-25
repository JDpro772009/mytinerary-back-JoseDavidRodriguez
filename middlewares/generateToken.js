import jwt  from "jsonwebtoken";

export default async (req,res,next)=> {
    
    const token = jwt.sign(
    {email:req.body.email || req.user.email},
    process.env.SECRET,
    {expiresIn:60*60*5}
    )
   
    
    req.body.token = token
    return next()
 }