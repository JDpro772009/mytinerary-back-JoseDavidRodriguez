import City from "../../models/City.js"

const eliminar = {
    destroy: async (req, res, next) => {
        try {
           
            let eliminar = await City.deleteOne(
                { _id: req.body._id }
            )
            return res.status(200).json({ response: eliminar }) 
        } catch (error) {
            next(error)
        }
    }
}

export default eliminar