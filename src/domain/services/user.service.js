import User from "../../schemas/user.schema.js";
import Locker from "../../schemas/locker.schema.js";
import { BookingService } from "./booking.service.js"; // Importer le BookingService
import {BASE_URL} from "../../../index.js"

const bookingService = new BookingService();


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

    async bookLocker(studentId) {
        try {
            const response = await fetch(`${BASE_URL}/api/locker/available`);
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des casiers disponibles');
            }    

            const availableLockers = await response.json();


            if (availableLockers.length === 0) {
                return('Aucun casier disponible');
            }

            const lockerToBook = availableLockers[0]; 

            const updatedLocker = await Locker.findByIdAndUpdate(
                lockerToBook._id, // ID du casier sélectionné
                { status: 'occupied' }, // Mise à jour du statut
                { new: true } // Retourner le casier mis à jour
            );

            if (!updatedLocker) {
                throw new Error('Erreur lors de la réservation du casier');
            }

            const newBooking = await bookingService.create(updatedLocker._id, studentId);

            return {
                locker: updatedLocker,
                booking: newBooking
            };
        } catch (error) {
            throw new Error(`Erreur lors de la réservation du casier : ${error.message}`);
        }
    }


    viewPassword () {};

    openLocker () {}; 


} 