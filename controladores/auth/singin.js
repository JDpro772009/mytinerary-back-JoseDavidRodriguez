import Usuario from "../../models/Usuario.js"


const singin = {
    update: async (req, res, next) => {
        try {
            await Usuario.findOneAndUpdate(
                { _id: req.body._id }, 
                {online:true}     
            )
        
            
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

export default singin