import Usuario from "../../models/Usuario.js"


let emailUsuario = async (req,res,next)=>{
    try {
       
        let email = req.params.email

        let encontrarUsuario = await Usuario.find({correo:email})

        let respuesta = req
        next(respuesta)

        return res.status(200).json({
            response:encontrarUsuario
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
    
}

export {emailUsuario}