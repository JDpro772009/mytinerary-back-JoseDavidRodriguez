import Usuario from "../../models/Usuario.js"


const singinGoogle = {
    update: async (req, res, next) => {
        try {
            await Usuario.findOneAndUpdate(
                { _id: req.body._id }, 
                {online:true}     
            )
            
          
            
            res.redirect("http://localhost:5173/home?token="+req.body.token+"&email="+req.user.correo+"&nombrePerfil="+req.user.nombre+"&fotoPerfil="+req.user.foto)
            return res.status(200).json({
                 sucess:true,
                 message:"Sig in" ,
                 user:req.user,
                 token:req.body.token
                })
            
        } catch (error) {
            next(error)
        }
    }
}

export default singinGoogle