import passport from "passport";
import Usuario from "../models/Usuario.js";
import { ExtractJwt, Strategy } from "passport-jwt";

export default passport.use(
    new Strategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET
        },
        async(jwt_payload, done)=>{
       
    try{
        let user = Usuario.findOne({correo:jwt_payload.correo})
             
        if(user){
            return done(null,user)
        }else{
            return done(null, null)
        }
        }
    catch (error){
      return done(error,null)
    }
}
        
    )
) 
 
    
