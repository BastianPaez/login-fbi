import { Router } from "express";
import { LoginControllers } from "../controller/login.controller.js";
import { verifyTokenJWT } from "../middlewares/jwt.middleware.js";

const router = Router();


router.get('/auth',verifyTokenJWT, LoginControllers.main)
router.post('/login' , LoginControllers.login)


export default router;