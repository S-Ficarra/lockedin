import express from 'express';
import { registerUser, bookLocker, getAllUsers, getUserByStudentId } from '../controllers/user.controller.js';

const router = express.Router();

// Route pour l'inscription d'un utilisateur
router.post('/register', registerUser);

router.post ('/bookLocker', bookLocker);

router.get ('/allusers', getAllUsers)

router.get ('/:studentId', getUserByStudentId)



export default router;