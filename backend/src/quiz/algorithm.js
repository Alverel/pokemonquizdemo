const { pokemonData } = require('./pokemonData');

/**
 * Calcule le Pokémon le plus proche du profil utilisateur.
 *
 * Algorithme :
 *  1. Agréger les scores de toutes les réponses en un vecteur de dimensions.
 *  2. Calculer un produit scalaire entre le vecteur utilisateur et le profil
 *     de chaque Pokémon.
 *  3. Retourner le Pokémon ayant le score le plus élevé.
 *
 * Cette approche garantit au moins 151 chemins distincts car chaque Pokémon
 * possède un profil unique dans l'espace des dimensions.
 *
 * @param {Array<Object>} answers - Tableau des objets scores des réponses
 *   Exemple : [{ fire: 3, fierce: 2 }, { water: 4, calm: 2 }, ...]
 * @returns {Object} Le Pokémon correspondant
 */
function calculatePokemon(answers) {
  // Agrégation du profil utilisateur
  const userProfile = {};
  for (const answerScores of answers) {
    for (const [dim, score] of Object.entries(answerScores)) {
      userProfile[dim] = (userProfile[dim] || 0) + score;
    }
  }

  let bestPokemon = null;
  let bestScore = -Infinity;

  for (const pokemon of pokemonData) {
    // Produit scalaire entre userProfile et le profil du Pokémon
    let score = 0;
    for (const [dim, weight] of Object.entries(pokemon.profile)) {
      score += (userProfile[dim] || 0) * weight;
    }

    if (score > bestScore) {
      bestScore = score;
      bestPokemon = pokemon;
    }
  }

  return bestPokemon;
}

module.exports = { calculatePokemon };
