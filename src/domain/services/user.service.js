import User from "../../repository/schemas/user.schema.js";

export class UserService {

    async register(userData) {
        try {
            // Créer une nouvelle instance de l'utilisateur
            const newUser = new User(userData);
            // Enregistrer l'utilisateur dans la base de données
            await newUser.save();
            // Retourner l'utilisateur créé sans le mot de passe ou les informations sensibles
            return {
                id: newUser._id,
                name: newUser.name,
                firstName: newUser.firstName,
                email: newUser.email,
                role: newUser.role,
                registrationDate: newUser.registrationDate
            };
        } catch (error) {
            // Gérer les erreurs, par exemple, un email ou un studentId déjà utilisé
            throw new Error(`Erreur lors de l'enregistrement de l'utilisateur : ${error.message}`);
        }
    }

    login () {};

    logout () {};

    bookLocker () {};

    viewPassword () {};

    openLocker () {}; 


} 