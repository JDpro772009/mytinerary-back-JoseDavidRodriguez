import Itinerary from "../../models/Itinerary.js"

const iternaryCreated = async (req, res,next) => {
  try {

    
    await Itinerary.create(req.body)
 
    return res.status(201).json({ success: true })
    
  } catch (error) {
 next(error)
  }
}



export {iternaryCreated}
