import City from "../../models/City.js"

const update = {
    update: async (req, res, next) => {
        try {
            await City.updateOne(
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