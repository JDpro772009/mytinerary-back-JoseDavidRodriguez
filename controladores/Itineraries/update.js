import Itinerary from "../../models/Itinerary.js"

const update = {
    update: async (req, res, next) => {
        try {
            await Itinerary.updateOne(
                { _id: req.body._id }, 
                req.body       
            )
            return res.status(200).json({ response: 'updated' })   
        } catch (error) {
            next(error)
        }
    }
}

export default update