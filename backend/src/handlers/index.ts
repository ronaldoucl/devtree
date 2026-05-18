import User from "../models/User";
import type { Request, Response } from "express";
import slug from "slug";
import { hashPassword, checkPassword } from "../utils/auth";

export const createAccount = async (req: Request, res: Response) => {

    const { email, password } = req.body
    const userExists = await User.findOne({ email });
    if (userExists) {
        const error = new Error("Un usuario con ese email ya está registrado");
        return res.status(409).json({ error: error.message });
    }

    const handle = slug(req.body.handle, "")
    const handleExists = await User.findOne({ handle });
    if (handleExists) {
        const error = new Error("El nombre de usuario no está disponible");
        return res.status(409).json({ error: error.message });
    }

    const user = new User(req.body)
    user.password = await hashPassword(password)
    user.handle = handle

    await user.save()
    res.status(201).send("Registro Creado Correctamenteee")
}

export const login = async (req: Request, res: Response) => {
    //Validar Email
    const { email, password } = req.body
    const user = await User.findOne({ email });
    if (!user) {
        const error = new Error("Correo invalido");
        return res.status(401).json({ error: error.message });
    }

    //Validar Password
    const isPasswordCorrect = await checkPassword(password, user.password);
    if (!isPasswordCorrect) {
        const error = new Error("Contraseña incorrecta");
        return res.status(401).json({ error: error.message });
    }

    res.send("Autenticado...");
}