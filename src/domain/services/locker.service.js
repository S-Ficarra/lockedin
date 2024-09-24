import Locker from "../../schemas/locker.schema.js";
import User from "../../schemas/user.schema.js";
import Booking from "../../schemas/booking.schema.js";

export class LockerService {

    async getAllAvailableLockers () {
        try {
            const availableLockers = await Locker.find({ status: 'available' });
            return availableLockers;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des lockers disponibles : ${error.message}`);
        }
    }

    async isLockerBooked (nfcKey) {
        try {
            // Trouver l'utilisateur par nfcKey
            const user = await User.findOne({ nfcKey: nfcKey });
            if (!user) {
                throw new Error('Utilisateur non trouvé');
            }

            // Trouver la réservation active de l'utilisateur
            const booking = await Booking.findOne({
                user: user._id,
                status: 'active'
            });

            if (!booking) {
                return null; // Aucun casier réservé ou pas de réservation active
            }
            
            const locker = await Locker.findById(booking.locker);

            return locker.lockerId;
  
        } catch (error) {
            throw new Error(`Erreur lors de la vérification de la réservation : ${error.message}`);
        }
    }
    

};