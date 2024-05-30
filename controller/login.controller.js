import { LoginModels } from "../model/login.models.js";
import "dotenv/config";
import jwt from 'jsonwebtoken';

const login = (req, res) => {
    
    try {
        const { email, password} = req.body;
        const user = LoginModels.findUser(email);
        if (!user) return res.status(400).json({
            ok: false,
            msg: "El email no está registrado"
        })
        if (user.password !== password)return res.status(401).json({
            ok: false,
            msg: "Contraseña incorrecta"
        })

        const token = jwt.sign({email: user.email}, process.env.SECRET_JWT, {expiresIn: '2m'})
        
        return res.json({ token, email})

    } catch (error) {
        console.log(error)
        return res.status(code).json({ ok: false })
    }
}

const main = (req, res) => {
    const email = req.email.split(' ')
    console.log(email[0])
    res.json({email})
}


export const LoginControllers = {
    login,
    main
}