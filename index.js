// Importer les dépendances
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();

// Initialiser Express
const app = express();
const port = 3000;

// Middleware pour traiter les requêtes JSON
app.use(express.json());

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

// Exemple d'une route basique
app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API Node.js avec MongoDB !');
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`API en écoute sur http://localhost:${port}`);
});
