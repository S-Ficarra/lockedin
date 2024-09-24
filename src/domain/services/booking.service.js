import Booking from '../../repository/schemas/booking.schema.js';
import Locker from '../../repository/schemas/locker.schema.js';
import User from '../../repository/schemas/user.schema.js';

export class BookingService {

    async create(lockerId, studentId) {
        try {
            // Assurez-vous que le casier et l'utilisateur existent
            const locker = await Locker.findById(lockerId);
            if (!locker) {
                throw new Error('Casier non trouvé');
            }

            console.log(studentId);
            

            const user = await User.findOne({ studentId: studentId });;
            if (!user) {
                throw new Error('Utilisateur non trouvé');
            }            

            // Créer une nouvelle réservation
            const newBooking = new Booking({
                user: user._id,
                locker: lockerId,
                startTime: new Date(),  // Démarrer la réservation immédiatement
                status: 'active' // Statut de la réservation
            });

            // Sauvegarder la réservation dans la base de données
            await newBooking.save();

            return newBooking;
        } catch (error) {
            throw new Error(`Erreur lors de la création de la réservation : ${error.message}`);
        }
    }
}
