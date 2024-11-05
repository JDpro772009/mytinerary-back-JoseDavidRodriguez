import City from "../../models/City.js"
import "../../models/Itinerary.js"
let allCities= async (req,res,next)=>{
    try {
        
        let all = await City.find().populate("iternario", "foto nombre precio duracion likes hashtags").exec()
    
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
let iternaryCity = async (req,res,next)=>{
    try {
       
        let Id = req.params.idCiudad

        let encontrarItiner = await City.find({_id:Id}).populate("iternario", "foto nombre precio duracion likes hashtags").select("iternario").exec()

        let respuesta = req
        next(respuesta)

        return res.status(200).json({
            response:encontrarItiner
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
    
}




export {allCities,idCity,iternaryCity}