import Booking from '../../schemas/booking.schema.js';
import Locker from '../../schemas/locker.schema.js';
import User from '../../schemas/user.schema.js';

export class BookingService {

    async create(lockerId, studentId, endTime) {
        try {
            
            const locker = await Locker.findById(lockerId);
            if (!locker) {
                throw new Error('Casier non trouvé');
            }
    
            const user = await User.findOne({ studentId: studentId });
            if (!user) {
                throw new Error('Utilisateur non trouvé');
            }
    
            const now = new Date(); // Date actuelle
    
            // Si aucun endTime n'est fourni, on définit la fin à minuit (prochain minuit)
            if (!endTime) {
                endTime = new Date();
                endTime.setHours(24, 0, 0, 0);  // Fin à minuit
            } else {
                endTime = new Date(endTime);  // Si une heure de fin personnalisée est fournie
            }
    
            // Créer une nouvelle réservation
            const newBooking = new Booking({
                user: user._id,
                locker: lockerId,
                startTime: now,  // Démarrer la réservation immédiatement
                endTime: endTime, // Fin de la réservation à l'heure personnalisée ou à minuit
                status: 'active'  // Statut de la réservation
            });
    
            // Sauvegarder la réservation dans la base de données
            await newBooking.save();
    
            return newBooking;
        } catch (error) {
            throw new Error(`Erreur lors de la création de la réservation : ${error.message}`);
        }
    }
}
