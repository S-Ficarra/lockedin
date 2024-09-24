import express from 'express';
import { registerUser } from '../controllers/user.controller.js';

const router = express.Router();

// Route pour l'inscription d'un utilisateur
router.post('/register', registerUser);



export default router;