const BASE = '/api';

export async function fetchQuestions() {
  const res = await fetch(`${BASE}/quiz/questions`);
  if (!res.ok) throw new Error('Impossible de charger les questions');
  return res.json();
}

export async function submitAnswers(answers) {
  const res = await fetch(`${BASE}/quiz/result`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answers }),
  });
  if (!res.ok) throw new Error('Erreur lors du calcul du résultat');
  return res.json();
}

export async function saveResult(pseudo, pokemon, pokemonId) {
  const res = await fetch(`${BASE}/save`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pseudo, pokemon, pokemonId }),
  });
  if (!res.ok) throw new Error('Erreur lors de l\'enregistrement');
  return res.json();
}

export async function fetchLeaderboard() {
  const res = await fetch(`${BASE}/leaderboard`);
  if (!res.ok) throw new Error('Impossible de charger le leaderboard');
  return res.json();
}
