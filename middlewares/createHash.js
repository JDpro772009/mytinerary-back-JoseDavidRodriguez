import bcryptjs from "bcryptjs"

export default async (req,res,next)=> {
   let contraseña = req.body.contraseña
   let hash = bcryptjs.hashSync(contraseña,10)

   req.body.contraseña = hash
   return next()
}