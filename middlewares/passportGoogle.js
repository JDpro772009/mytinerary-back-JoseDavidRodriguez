import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import Usuario from "../models/Usuario.js";
export default passport.use(
    new GoogleStrategy({
        clientID:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        callbackURL:process.env.GOOGLE_URI_BACK
     },
     async (accessToken,refreshToken,profile,done) => {
       
        try{
          
            
            let user = Usuario.findOne({email:profile.emails[0].value})
           
        
            if(!user){
                user = new Usuario({
                    nombre:profile.displayName,
                    apellido:profile.name.familyName,
                    correo:profile.emails[0].value,
                    foto:profile.photos[0].value,
                    
                    contraseña:profile.id,
                    online:false
                })             
                await user.save()
            }
            user={
                nombre:profile.displayName,
                apellido:profile.name.familyName,
                correo:profile.emails[0].value,
                foto:profile.photos[0].value,nombre:profile.displayName,

            }

            return done(null,user)
        }
        catch (error){
          return done(error,null)
        }
     })
)