import Itinerary from "../../models/Itinerary.js"

let allIternaries= async (req,res,next)=>{
    try {
        
        let all = await Itinerary.find()
    
        let respuesta = req
        next(respuesta)

        return res.status(200).json({
            response:all
        })
        
    } catch (error) {

        return res.status(500).json({
            response: error
        })
    }
    
}
let idIternary = async (req,res,next)=>{
    try {
       
        let Id = req.params.id

        let encontrarIternary = await Itinerary.find({_id:Id})

        let respuesta = req
        next(respuesta)

        return res.status(200).json({
            response:encontrarIternary
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
    
}




export {allIternaries,idIternary}