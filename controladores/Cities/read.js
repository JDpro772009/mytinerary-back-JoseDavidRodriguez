import City from "../../models/City.js"

let allCities= async (req,res,next)=>{
    try {
        
        let all = await City.find()
    
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
let idCity = async (req,res,next)=>{
    try {
       
        let Id = req.params.id

        let encontrarCity = await City.find({_id:Id})

        let respuesta = req
        next(respuesta)

        return res.status(200).json({
            response:encontrarCity
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
    
}




export {allCities,idCity}