import { LockerService } from "../domain/services/locker.service.js";

const lockerService = new LockerService();

export const getAllAvailableLockers = async (req, res) => {
    try {
        const availableLockers = await lockerService.getAllAvailableLockers();
        res.status(200).json(availableLockers);
    } catch (error) {
        res.status(500).json({ error: `Erreur lors de la récupération des lockers : ${error.message}` });
    }
};