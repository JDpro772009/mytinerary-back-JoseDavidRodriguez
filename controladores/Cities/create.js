import City from "../../models/City.js"

const cityCreated = async (req, res,next) => {
  try {

    
    await City.create(req.body)
 
    return res.status(201).json({ success: true })
    
  } catch (error) {
 next(error)
  }
}



export {cityCreated}
