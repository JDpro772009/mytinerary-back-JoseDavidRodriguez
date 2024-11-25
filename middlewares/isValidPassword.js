import bcryptjs from "bcryptjs"

export default async (req,res,next)=> {
    try{
        let contraseñaBody = req.body.contraseña
        let contraseñaUser = req.user.contraseña

        
        let compare= await bcryptjs.compare(contraseñaBody,contraseñaUser)
        
        
    
        
        if(compare){
            delete req.body.contraseña
            console.log(compare);
            return next()
             
        }
        return res.status(400).json({
            success:false,
            message:"correo o contraseña invalida"
        })

    }catch (error){
       
       next(error)
    }
}