// config/config.js
/**
 * Configuration et initialisation de Sequelize.
 * On exporte directement l'instance pour la réutiliser partout.
 */

require('dotenv').config();       // 1) Charge les variables .env (si le fichier existe)

const { Sequelize } = require('sequelize');
const path = require('path');     // 2) Pour construire un chemin absolu vers le fichier SQLite

// 3) On récupère depuis le .env (sinon on met une valeur par défaut)
const DB_STORAGE = process.env.DB_STORAGE || path.join(__dirname, '..', 'database.sqlite');

// 4) Création de l'instance Sequelize orientée SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: DB_STORAGE,
  logging: false,                // passe à true pour voir toutes les requêtes SQL dans la console
});

// 5) Petit helper pour tester la connexion au démarrage
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connexion à SQLite réussie !');
  } catch (error) {
    console.error('Impossible de se connecter à SQLite :', error);
  }
}

// 6) On exécute le test au premier import
testConnection();

// 7) On exporte l'instance pour l'utiliser dans les modèles
module.exports = sequelize;
