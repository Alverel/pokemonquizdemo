/**
 * Set de 10 questions de personnalité.
 * Chaque réponse ajoute des points à des dimensions (types et traits).
 * Dimensions types : fire, water, grass, electric, psychic, fighting,
 *   normal, poison, ground, rock, ice, ghost, dragon, bug, flying
 * Dimensions traits : brave, calm, energetic, mysterious, fierce, wise, playful, solitary
 */
const questions = [
  {
    id: 1,
    text: "Où te sens-tu le plus à l'aise ?",
    answers: [
      {
        text: "Dans une forêt dense et verdoyante",
        scores: { grass: 3, bug: 2, calm: 2, mysterious: 1 },
      },
      {
        text: "Au bord de l'océan ou d'un lac",
        scores: { water: 4, calm: 3 },
      },
      {
        text: "Sur une montagne ou dans des grottes",
        scores: { rock: 3, ground: 2, brave: 2, solitary: 1 },
      },
      {
        text: "Dans une ville animée et dynamique",
        scores: { electric: 3, normal: 2, energetic: 2, playful: 1 },
      },
    ],
  },
  {
    id: 2,
    text: "Quel est ton élément préféré ?",
    answers: [
      {
        text: "Le feu, ardent et passionné",
        scores: { fire: 4, fierce: 2, energetic: 1 },
      },
      {
        text: "L'eau, calme et profonde",
        scores: { water: 4, calm: 2 },
      },
      {
        text: "La foudre, rapide et puissante",
        scores: { electric: 4, energetic: 2 },
      },
      {
        text: "La terre et les plantes",
        scores: { ground: 2, grass: 3, wise: 1, calm: 1 },
      },
    ],
  },
  {
    id: 3,
    text: "Comment tes amis te décriraient-ils ?",
    answers: [
      {
        text: "Mystérieux(se) et difficile à cerner",
        scores: { mysterious: 4, ghost: 2, psychic: 1 },
      },
      {
        text: "Courageux(se) et déterminé(e)",
        scores: { brave: 4, fighting: 2, fire: 1 },
      },
      {
        text: "Toujours de bonne humeur et jovial(e)",
        scores: { playful: 4, normal: 2, energetic: 1 },
      },
      {
        text: "Sage et réfléchi(e)",
        scores: { wise: 4, psychic: 2, calm: 1 },
      },
    ],
  },
  {
    id: 4,
    text: "Tu préfères...",
    answers: [
      {
        text: "Être seul(e) et indépendant(e)",
        scores: { solitary: 4, dragon: 2, ghost: 1 },
      },
      {
        text: "Être entouré(e) d'amis",
        scores: { playful: 3, normal: 2, energetic: 2 },
      },
      {
        text: "Diriger et prendre les décisions",
        scores: { brave: 3, fierce: 2, fighting: 2 },
      },
      {
        text: "Observer et analyser la situation",
        scores: { wise: 3, mysterious: 2, psychic: 2 },
      },
    ],
  },
  {
    id: 5,
    text: "Face à un obstacle, tu...",
    answers: [
      {
        text: "Fonces dedans sans réfléchir",
        scores: { fierce: 4, brave: 2, fighting: 2 },
      },
      {
        text: "Trouves une solution créative",
        scores: { wise: 3, psychic: 2, electric: 1, energetic: 1 },
      },
      {
        text: "Es patient(e) et attends ton heure",
        scores: { calm: 4, water: 2, rock: 1 },
      },
      {
        text: "Demandes de l'aide aux autres",
        scores: { playful: 2, normal: 2, calm: 1, energetic: 1 },
      },
    ],
  },
  {
    id: 6,
    text: "Ton activité préférée le week-end ?",
    answers: [
      {
        text: "Explorer de nouveaux endroits",
        scores: { brave: 3, flying: 2, dragon: 2, energetic: 1 },
      },
      {
        text: "Lire, méditer ou apprendre",
        scores: { wise: 4, psychic: 2, mysterious: 1, calm: 1 },
      },
      {
        text: "Sortir et faire la fête avec des amis",
        scores: { playful: 3, normal: 2, energetic: 2 },
      },
      {
        text: "Jardiner ou passer du temps dans la nature",
        scores: { grass: 4, calm: 2, wise: 1 },
      },
    ],
  },
  {
    id: 7,
    text: "Ta saison préférée ?",
    answers: [
      {
        text: "L'été, chaud et ensoleillé",
        scores: { fire: 3, energetic: 2, playful: 2 },
      },
      {
        text: "L'hiver, froid et silencieux",
        scores: { ice: 4, calm: 2, solitary: 2 },
      },
      {
        text: "Le printemps, frais et coloré",
        scores: { grass: 3, bug: 2, playful: 2 },
      },
      {
        text: "L'automne, mystérieux et mélancolique",
        scores: { mysterious: 3, ground: 1, normal: 1, calm: 2 },
      },
    ],
  },
  {
    id: 8,
    text: "Ton style en compétition ?",
    answers: [
      {
        text: "Attaque brute et directe",
        scores: { fierce: 4, fighting: 3, brave: 1 },
      },
      {
        text: "Stratégie et manipulation mentale",
        scores: { wise: 3, psychic: 3, mysterious: 2 },
      },
      {
        text: "Vitesse et esquive",
        scores: { energetic: 4, flying: 2, electric: 2 },
      },
      {
        text: "Défense solide et endurance",
        scores: { calm: 3, rock: 2, normal: 2, brave: 1 },
      },
    ],
  },
  {
    id: 9,
    text: "Quel animal préfères-tu ?",
    answers: [
      {
        text: "Un prédateur puissant (lion, loup)",
        scores: { fierce: 3, brave: 3, fighting: 2 },
      },
      {
        text: "Un animal aquatique (dauphin, orque)",
        scores: { water: 3, playful: 2, wise: 2, calm: 1 },
      },
      {
        text: "Un oiseau majestueux (aigle, phoenix)",
        scores: { flying: 4, brave: 2, mysterious: 1 },
      },
      {
        text: "Un insecte ou reptile fascinant",
        scores: { bug: 3, mysterious: 2, poison: 2 },
      },
    ],
  },
  {
    id: 10,
    text: "Ton plus grand atout ?",
    answers: [
      {
        text: "Ma force physique brute",
        scores: { fighting: 3, ground: 2, rock: 2, fierce: 1 },
      },
      {
        text: "Mon intelligence et ma créativité",
        scores: { wise: 4, psychic: 3, electric: 1 },
      },
      {
        text: "Ma rapidité et mes réflexes",
        scores: { energetic: 4, electric: 2, flying: 1 },
      },
      {
        text: "Ma résistance et ma persévérance",
        scores: { calm: 3, normal: 2, rock: 2, brave: 1 },
      },
    ],
  },
];

module.exports = { questions };
