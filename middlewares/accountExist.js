import Usuario from "../models/Usuario.js";

export default async (req,res,next)=> {
    try{
        let cuenta = await Usuario.findOne({correo:req.body.correo})
        if(cuenta){
            return res.status(400).json({
                success:false,
                message:"El usuario ya existe"
            })
        }
        next()

    }catch (error){
       next(error)
    }
}