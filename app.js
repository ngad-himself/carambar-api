// app.js
// 1) Import des modules indispensables
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');

// 2) Création de l’application Express
const app = express();

// 3) Middleware JSON pour décoder le body des requêtes
app.use(express.json());

const cors = require('cors');
app.use(cors());          // autorise toutes les origines pour ce POC


// 4) Swagger : on lit le fichier YAML de façon synchrone
const swaggerDoc = fs.readFileSync(path.join(__dirname, 'swagger', 'swagger.yaml'), 'utf8');
const swaggerSpec = require('yamljs').parse(swaggerDoc);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 5) Import des routes blagues (on les ajoutera tout de suite après)
const jokeRoutes = require('./routes/jokeRoutes');
app.use('/api/v1/blagues', jokeRoutes);

// Synchronisation avec la base de données
const sequelize = require('./config/config');
const Joke = require('./models/joke');

sequelize.sync({ force: false }) // force: false = ne PAS écraser la table à chaque lancement
  .then(() => {
    console.log('Table Joke synchronisée avec la base de données');
  })
  .catch((err) => {
    console.error('Erreur de synchronisation de la BDD :', err);
  });

// 6) Export de l’app pour qu’elle soit démarrée dans server.js
module.exports = app;
