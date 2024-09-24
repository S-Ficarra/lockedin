// Importer les dépendances
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './src/routes/user.routes.js'

// Charger les variables d'environnement
dotenv.config();

// Initialiser Express
const app = express();
const port = 3000;

// Middleware pour traiter les requêtes JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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


app.use('/api/users', userRoutes);


// Démarrer le serveur
app.listen(port, () => {
    console.log(`API en écoute sur http://localhost:${port}`);
});
