import Itinerary from "../../models/Itinerary.js"

const eliminar = {
    destroy: async (req, res, next) => {
        try {
           
            let eliminar = await Itinerary.deleteOne(
                { _id: req.body._id }
            )
            return res.status(200).json({ response: eliminar }) 
        } catch (error) {
            next(error)
        }
    }
}

export default eliminar