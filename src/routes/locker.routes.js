import express from 'express';
import { getAllAvailableLockers, isLockerBooked} from '../controllers/locker.controller.js';

const router = express.Router();

// Route pour l'inscription d'un utilisateur
router.get('/available', getAllAvailableLockers);

router.get('/isLockerBooked/:nfcKey', isLockerBooked)


export default router;