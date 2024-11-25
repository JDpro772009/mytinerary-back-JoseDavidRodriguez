import Usuario from "../../models/Usuario.js"

const usuarioCreated = async (req, res,next) => {
  try {

    let user = req.body
    await Usuario.create(user)
    
    user.online = false
    
 
    return res.status(201).json({ 
      success: true,
      objeto:user

     })
    
  } catch (error) {
 next(error)
  }
}



export {usuarioCreated}
