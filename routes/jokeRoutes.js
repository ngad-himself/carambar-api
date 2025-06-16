const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/jokeController');

// 🔹 GET /api/v1/blagues → Toutes les blagues
router.get('/', jokeController.getAllJokes);

// 🔹 GET /api/v1/blagues/:id → Une blague précise
router.get('/:id', jokeController.getJokeById);

// 🔹 GET /api/v1/blagues/random → Une blague aléatoire
router.get('/random/blague', jokeController.getRandomJoke);

// 🔹 POST /api/v1/blagues → Ajouter une blague
router.post('/', jokeController.addJoke);

module.exports = router;

