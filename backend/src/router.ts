import {Router} from 'express';
import User from './models/User';
import { createAccount, login } from './handlers';
import { body } from "express-validator";
import { handleInputErrors } from './middleware/validation';

const router = Router();

router.post("/auth/register", 
    body("handle")
        .notEmpty()
        .withMessage("El nombre de usuario es requerido"),
    body("handle")
        .isLength({ min: 3, max: 20 })
        .withMessage("El nombre de usuario debe tener entre 3 y 20 caracteres"),
    body("email")
        .isEmail()
        .withMessage("El email no es válido"),
    body("password")
        .isLength({ min: 8 })
        .withMessage("La contraseña debe tener al menos 8 caracteres"),
    handleInputErrors,
    createAccount);


router.post("/auth/login", 
    body("email")
        .isEmail()
        .withMessage("El email no es válido"),
    body("password")
        .notEmpty()
        .withMessage("El password es obligatorio"),
    handleInputErrors,
    login);

export default router;