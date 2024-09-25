import { LockerService } from "../domain/services/locker.service.js";
import { UserService } from "../domain/services/user.service.js";

const userService = new UserService();
const lockerService = new LockerService();

export const registerUser = async (req, res) => {
    try {
        const userData = req.body; // Les données de l'utilisateur viennent du corps de la requête        
        const newUser = await userService.register(userData); // Appel de la méthode register du service
        res.status(201).json(newUser); // Retourner l'utilisateur créé avec un code de statut 201 (Créé)
    } catch (error) {
        // Gérer les erreurs et retourner un message d'erreur
        res.status(400).json({ error: error.message }); // Code de statut 400 pour une mauvaise demande
    }
};
    
export const bookLocker = async (req, res) => {
    try {

        const studentId = req.body.studentId;

        const bookedLocker = await userService.bookLocker(studentId);

        res.status(200).json({
            message: 'Casier réservé avec succès',
            locker: bookedLocker
        });
    } catch (error) {
        res.status(500).json({
            error: `Erreur lors de la réservation du casier : ${error.message}`
        });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userService.getAllUsers();

        return res.status(200).json(allUsers);
    } catch (error) {
        return res.status(500).json({ error: `Erreur lors de la récupération des utilisateurs : ${error.message}` });
    }
};

export const getUserByStudentId = async (req, res) => {
    try {
        const studentId = req.params.studentId        
        const user = await userService.getUserByStudentId(studentId)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ error: `Erreur lors de la récupération de l'utilisateur : ${error.message}` });
    }
}



