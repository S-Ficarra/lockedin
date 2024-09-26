// Importer les dépendances
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './src/routes/user.routes.js'
import lockerRoutes from './src/routes/locker.routes.js'
import mailRoutes from './src/routes/mail.routes.js'

export const BASE_URL = 'http://localhost:3000'

// Charger les variables d'environnement
dotenv.config();

// Initialiser Express
const app = express();
const port = 3000;

// Middleware pour traiter les requêtes JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connexion à MongoDB réussie');
    })
    .catch((err) => {
        console.error('Erreur de connexion à MongoDB:', err);
    });


app.use('/users', userRoutes);

app.use('/locker', lockerRoutes);

app.use('/sendEmail', mailRoutes)



// Démarrer le serveur
app.listen(port, () => {
    console.log(`API en écoute sur ${BASE_URL}`);
});
