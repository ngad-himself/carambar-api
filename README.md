# Carambar Blagues – API

Bienvenue sur le backend du projet **Carambar Blagues** 🎭  
Cette API REST permet de consulter, ajouter et gérer des blagues au format *question + réponse*.

## 🔗 Démo en ligne

- 🌐 [API hébergée sur Render](https://carambar-api-63au.onrender.com)
- 📘 [Documentation Swagger](https://carambar-api-63au.onrender.com/api-docs)

## 🗃️ Endpoints disponibles

- `GET /api/v1/blagues` – toutes les blagues
- `GET /api/v1/blagues/random/blague` – une blague aléatoire
- `POST /api/v1/blagues` – ajouter une blague
- `DELETE /api/v1/blagues/:id` – supprimer une blague

➡️ Consulte [Swagger](https://carambar-api-63au.onrender.com/api-docs) pour tester toutes les routes.

## 🧪 Base de données

- Utilise **SQLite** via Sequelize
- Blagues stockées dans un fichier `database.sqlite`
- Une commande d’insertion (`insertJokes.js`) permet d’ajouter un lot initial de blagues

## 📁 Arborescence simplifiée

carambar-api/
├── app.js
├── server.js
├── config/
│ └── config.js
├── models/
│ └── joke.js
├── routes/
│ └── jokeRoutes.js
├── swagger/
│ └── swagger.yaml
├── insertJokes.js
└── .env


## ⚙️ Technologies

- Node.js
- Express
- Sequelize (avec SQLite)
- Swagger (via YAML)
- Render (hébergement API)

## 🚀 Lien vers le frontend

🖥️ [Frontend GitHub Pages](https://ngad-himself.github.io/carambar-front/)  
📁 [Repo Frontend](https://github.com/ngad-himself/carambar-front)

---

✍️ Projet réalisé dans le cadre d’une formation CDA.  
Auteur : Gad-Eliezer N'DA | GitHub : ngad-himself
