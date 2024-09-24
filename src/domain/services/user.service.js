import User from "../../repository/schemas/user.schema.js";

export class UserService {

    async register(userData) {
        try {
            const newUser = new userSchema(userData);
            await newUser.save();
            return {
                id: newUser._id,
                name: newUser.name,
                firstName: newUser.firstName,
                email: newUser.email,
                role: newUser.role,
                registrationDate: newUser.registrationDate
            };
        } catch (error) {
            throw new Error(`Erreur lors de l'enregistrement de l'utilisateur : ${error.message}`);
        }
    }

    login () {};

    logout () {};

    async bookLocker() {
        try {
            const response = await fetch('http://localhost:3000/api/locker/available');
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des casiers disponibles');
            }

            const availableLockers = await response.json();

            if (availableLockers.length === 0) {
                return('Aucun casier disponible');
            }

            const lockerToBook = availableLockers[0]; 

            const updatedLocker = await Locker.findByIdAndUpdate(
                lockerToBook.lockerId, // ID du casier sélectionné
                { status: 'occupied' }, // Mise à jour du statut
                { new: true } // Retourner le casier mis à jour
            );

            if (!updatedLocker) {
                throw new Error('Erreur lors de la réservation du casier');
            }

            // 5. Retourner le casier réservé
            return updatedLocker;
        } catch (error) {
            throw new Error(`Erreur lors de la réservation du casier : ${error.message}`);
        }
    }

    
    viewPassword () {};

    openLocker () {}; 


} 