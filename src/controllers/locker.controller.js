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

export const isLockerBooked = async (req, res) => {
    try {
        const { nfcKey } = req.params; 

        const formatNfcKey = (nfcKey) => {
            return nfcKey.match(/.{1,2}/g).join(' ');
        };        

        const lockerId = await lockerService.isLockerBooked(formatNfcKey(nfcKey));

        if (lockerId) {
            return res.status(200).json({ lockerId });
        } else {
            return res.status(200).json({ lockerId : 0});
        }
    } catch (error) {
        return res.status(500).json({ error: `Erreur lors de la récupération des réservations : ${error.message}` });
    }

 }