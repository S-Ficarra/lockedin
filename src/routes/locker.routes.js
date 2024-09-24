import express from 'express';
import { getAllAvailableLockers } from '../controllers/locker.controller.js';

const router = express.Router();

// Route pour l'inscription d'un utilisateur
router.get('/available', getAllAvailableLockers);


export default router;