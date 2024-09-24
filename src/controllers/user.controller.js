import { UserService } from "../domain/services/user.service.js";

const userService = new UserService();

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

