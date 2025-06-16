// models/joke.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); // Connexion Sequelize

const Joke = sequelize.define('Joke', {
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  answer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'jokes',   // nom de la table dans SQLite
  timestamps: true,     // ajoute createdAt et updatedAt automatiquement
});

module.exports = Joke;
