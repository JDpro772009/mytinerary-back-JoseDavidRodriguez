import Usuario from "../models/Usuario.js";

export default async (req,res,next)=> {
    try{
        let cuenta = await Usuario.findOne({correo:req.body.correo})
        if(cuenta){
            req.user = {
                correo: req.body.correo,
                contraseña: cuenta.contraseña,
                nombre:cuenta.nombre,
                apellido:cuenta.apellido,
                foto:cuenta.foto,
                pais:cuenta.pais
            }
        
        
            
            return next()
             
        }
        return res.status(400).json({
            success:false,
            message:"El usuario no existe"
        })

    }catch (error){
       next(error)
    }
}