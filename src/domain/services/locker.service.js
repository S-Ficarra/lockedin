import Locker from "../../repository/schemas/locker.schema.js";

export class LockerService {

    async getAllAvailableLockers () {
        try {
            const availableLockers = await Locker.find({ status: 'available' });
            return availableLockers;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des lockers disponibles : ${error.message}`);
        }
    }

};