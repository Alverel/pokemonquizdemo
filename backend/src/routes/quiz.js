const express = require('express');
const { questions } = require('../quiz/questions');
const { calculatePokemon } = require('../quiz/algorithm');

const router = express.Router();

// GET /api/quiz/questions — retourne la liste de questions
router.get('/questions', (req, res) => {
  // On envoie les questions sans les scores (ne pas exposer la logique côté client)
  const safeQuestions = questions.map((q) => ({
    id: q.id,
    text: q.text,
    answers: q.answers.map((a, idx) => ({ id: idx, text: a.text })),
  }));
  res.json(safeQuestions);
});

/**
 * POST /api/quiz/result
 * Body : { answers: [{ questionId: 1, answerId: 2 }, ...] }
 * Retourne le Pokémon calculé ainsi que son sprite PokéAPI.
 */
router.post('/result', (req, res) => {
  const { answers } = req.body;

  if (!Array.isArray(answers) || answers.length === 0) {
    return res.status(400).json({ error: 'answers est requis et doit être un tableau non vide.' });
  }

  // Transformer les réponses en scores
  const answerScores = answers.map(({ questionId, answerId }) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return {};
    const answer = question.answers[answerId];
    if (!answer) return {};
    return answer.scores;
  });

  const pokemon = calculatePokemon(answerScores);

  // Sprite depuis la PokéAPI (sprites officiels)
  const spriteUrl = `${process.env.BASE_URL_API_POKEMON || 'https://pokeapi.co'}/api/v2/pokemon/${pokemon.id}`;

  res.json({
    pokemon: {
      id: pokemon.id,
      name: pokemon.name,
      nameFr: pokemon.nameFr,
      spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
      types: Object.keys(pokemon.profile).filter((k) =>
        ['fire','water','grass','electric','psychic','fighting','normal',
         'poison','ground','rock','ice','ghost','dragon','bug','flying'].includes(k)
      ),
    },
  });
});

module.exports = router;
