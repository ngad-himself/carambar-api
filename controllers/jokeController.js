// controllers/jokeController.js
const Joke = require('../models/joke');

// Récupérer toutes les blagues
exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.json(jokes);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des blagues' });
  }
};

// Récupérer une blague par son ID
exports.getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id);
    if (joke) {
      res.json(joke);
    } else {
      res.status(404).json({ error: 'Blague non trouvée' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la recherche de la blague' });
  }
};

// Récupérer une blague aléatoire
exports.getRandomJoke = async (req, res) => {
  try {
    const count = await Joke.count();
    const randomIndex = Math.floor(Math.random() * count);
    const randomJoke = await Joke.findOne({ offset: randomIndex });
    res.json(randomJoke);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération aléatoire' });
  }
};

// Ajouter une nouvelle blague
exports.addJoke = async (req, res) => {
  try {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ error: 'question et answer sont requis' });
    }

    const newJoke = await Joke.create({ question, answer });
    res.status(201).json(newJoke);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de l’ajout de la blague' });
  }
};
