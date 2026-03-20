const express = require('express');
const cors = require('cors');
const path = require('path');

const quizRouter = require('./routes/quiz');
const leaderboardRouter = require('./routes/leaderboard');

const app = express();
const PORT = process.env.PORT || 3001;

// ── Middlewares ──────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ── Routes API ───────────────────────────────────────────────
app.use('/api/quiz', quizRouter);
app.use('/api', leaderboardRouter);

// ── Servir le frontend en production ─────────────────────────
const publicDir = path.join(__dirname, '..', 'public');
app.use(express.static(publicDir));

// Toutes les routes non-API → index.html (React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

// ── Démarrage ────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});
