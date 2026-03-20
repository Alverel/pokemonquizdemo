const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// POST /api/save — enregistre un résultat (pseudo + pokémon)
router.post('/save', async (req, res) => {
  const { pseudo, pokemon, pokemonId } = req.body;

  if (!pseudo || !pokemon || !pokemonId) {
    return res.status(400).json({ error: 'pseudo, pokemon et pokemonId sont requis.' });
  }

  try {
    const result = await prisma.result.create({
      data: {
        pseudo: pseudo.trim().slice(0, 50),
        pokemon,
        pokemonId: Number(pokemonId),
      },
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de l\'enregistrement.' });
  }
});

// GET /api/leaderboard — retourne tous les résultats triés par date
router.get('/leaderboard', async (req, res) => {
  try {
    const results = await prisma.result.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de la récupération du leaderboard.' });
  }
});

module.exports = router;
