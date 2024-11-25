import Usuario from "../../models/Usuario.js"


const singout = {
    update: async (req, res, next) => {
        try {
            await Usuario.findOneAndUpdate(
                { _id: req.body._id }, 
                {online:false}     
            )
            return res.status(200).json({
                 sucess:true,
                 message:"Sig out"
                })
            
        } catch (error) {
            next(error)
        }
    }
}

export default singout