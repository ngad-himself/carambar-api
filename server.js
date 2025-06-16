// server.js
require('dotenv').config();   // ← lit les variables du fichier .env
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API Carambar prête sur http://localhost:${PORT}`);
});
