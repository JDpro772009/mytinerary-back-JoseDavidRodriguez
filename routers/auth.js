import { Router } from "express";

import singin from "../controladores/auth/singin.js"
import accountNoExist from "../middlewares/accountNoExist.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";
import singout from "../controladores/auth/singout.js";
import passport from "../middlewares/passport.js";
import passportGoogle from "../middlewares/passportGoogle.js";
import singinGoogle from "../controladores/auth/singinGoogle.js";

const router = Router()


router.post("/signIn",accountNoExist,isValidPassword, generateToken,singin.update)
router.post("/signOut",passport.authenticate("jwt",{session:false}),singout.update)
router.get("/signIn/google",passportGoogle.authenticate("google",{scope:["profile","email"],session:false}))


router.get("/signIn/google/callback", passportGoogle.authenticate("google",{ session: false, failureRedirect: "/login" }),generateToken,singinGoogle.update);

export default router