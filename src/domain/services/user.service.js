import User from "../../schemas/user.schema.js";
import Locker from "../../schemas/locker.schema.js";
import { BookingService } from "./booking.service.js"; // Importer le BookingService
import {BASE_URL} from "../../../index.js"


const bookingService = new BookingService();


export class UserService {

    async register(userData) {
        try {
            const allUsers = await User.find().sort({ studentId: -1 });

            let newStudentId = 1;  // Valeur par défaut si aucun utilisateur n'existe

            if (allUsers.length > 0) {
                // Récupérer le plus grand studentId et ajouter 1
                const highestStudentId = parseInt(allUsers[0].studentId, 10); // Assurer que c'est un entier
                newStudentId = highestStudentId + 1;
            }

            userData.studentId = newStudentId;

            // Créer le nouvel utilisateur avec le studentId généré
            const newUser = new User(userData);

            await newUser.save();

            // Retourner les informations de l'utilisateur créé
            return {
                id: newUser._id,
                name: newUser.name,
                firstName: newUser.firstName,
                email: newUser.email,
                role: newUser.role,
                studentId: newUser.studentId,  // Inclure le studentId dans la réponse
                registrationDate: newUser.registrationDate
            };
        } catch (error) {
            throw new Error(`Erreur lors de l'enregistrement de l'utilisateur : ${error.message}`);
        }
    }

    async getAllUsers() {
        try {
            const allUsers = await User.find(); 
            return allUsers;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des utilisateurs : ${error.message}`);
        }
    }

    async getUserByStudentId(studentId) {
        try {
            const user = await User.findOne({ studentId });
            if (!user) {
                throw new Error('Utilisateur non trouvé');
            }
            return user;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération de l'utilisateur : ${error.message}`);
        }
    }


    login () {};

    logout () {};

    async bookLocker(studentId, endTime) {
        try {
            // Récupérer les casiers disponibles
            const response = await fetch(`${BASE_URL}/locker/available`);
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des casiers disponibles');
            }    

            const availableLockers = await response.json();
    
            if (availableLockers.length === 0) {
                return 'Aucun casier disponible';
            }
    
            const lockerToBook = availableLockers[0]; 
    
            // Mettre à jour le statut du casier à "occupied"
            const updatedLocker = await Locker.findByIdAndUpdate(
                lockerToBook._id,
                { status: 'occupied' },
                { new: true }
            );
    
            if (!updatedLocker) {
                throw new Error('Erreur lors de la réservation du casier');
            }
    
            // Créer une nouvelle réservation avec l'endTime personnalisé ou la fin de journée (minuit)
            const newBooking = await bookingService.create(updatedLocker._id, studentId, endTime);
    
            return {
                locker: updatedLocker,
                booking: newBooking
            };
        } catch (error) {
            throw new Error(`Erreur lors de la réservation du casier : ${error.message}`);
        }
    }

} 