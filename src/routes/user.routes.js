import express from 'express';
import { registerUser, bookLocker } from '../controllers/user.controller.js';

const router = express.Router();

// Route pour l'inscription d'un utilisateur
router.post('/register', registerUser);

router.post ('/bookLocker', bookLocker);



export default router;