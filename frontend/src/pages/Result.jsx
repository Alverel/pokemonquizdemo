import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveResult } from '../api';

const TYPE_COLORS = {
  fire: '#f7534e',
  water: '#4c9be8',
  grass: '#5db85b',
  electric: '#f7d44c',
  psychic: '#e87ba1',
  fighting: '#c45733',
  normal: '#a8a77a',
  poison: '#a33ea1',
  ground: '#e2bf65',
  rock: '#b6a136',
  ice: '#96d9d6',
  ghost: '#735797',
  dragon: '#6f35fc',
  bug: '#a6b91a',
  flying: '#a98ff3',
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
    fontWeight: 'bold',
    marginBottom: '0.4rem',
  },
  subtitle: {
    opacity: 0.65,
    marginBottom: '2rem',
    fontSize: '1rem',
  },
  card: {
    background: 'rgba(255,255,255,0.08)',
    borderRadius: '2rem',
    padding: '2.5rem',
    maxWidth: '420px',
    width: '100%',
    boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.12)',
  },
  pokemonName: {
    fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
    fontWeight: 900,
    background: 'linear-gradient(90deg, #f7d44c, #f76c6c)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '0.5rem',
  },
  sprite: {
    width: '180px',
    height: '180px',
    objectFit: 'contain',
    imageRendering: 'auto',
    filter: 'drop-shadow(0 0 20px rgba(247,212,76,0.5))',
    margin: '1rem 0',
    animation: 'float 3s ease-in-out infinite',
  },
  typeTag: {
    display: 'inline-block',
    padding: '0.3rem 0.9rem',
    borderRadius: '999px',
    fontWeight: 600,
    fontSize: '0.85rem',
    textTransform: 'capitalize',
    margin: '0.2rem',
    color: '#fff',
    textShadow: '0 1px 2px rgba(0,0,0,0.4)',
  },
  typesRow: {
    marginBottom: '1.5rem',
  },
  saved: {
    fontSize: '0.9rem',
    opacity: 0.6,
    marginTop: '0.5rem',
  },
  btnRow: {
    display: 'flex',
    gap: '0.75rem',
    marginTop: '2rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btn: {
    padding: '0.75rem 1.5rem',
    borderRadius: '0.75rem',
    border: 'none',
    fontWeight: 700,
    fontSize: '0.95rem',
    cursor: 'pointer',
    transition: 'transform 0.15s',
  },
  btnPrimary: {
    background: 'linear-gradient(135deg, #f7d44c, #f76c6c)',
    color: '#1a1a2e',
  },
  btnSecondary: {
    background: 'rgba(255,255,255,0.12)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.2)',
  },
};

export default function Result() {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [saved, setSaved] = useState(false);
  const pseudo = sessionStorage.getItem('pseudo');

  useEffect(() => {
    const stored = sessionStorage.getItem('result');
    if (!stored || !pseudo) { navigate('/'); return; }
    const poke = JSON.parse(stored);
    setPokemon(poke);

    // Enregistrement automatique en BDD
    saveResult(pseudo, poke.nameFr, poke.id)
      .then(() => setSaved(true))
      .catch(() => setSaved(false));
  }, []);

  if (!pokemon) return null;

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

      <h1 style={styles.title}>Tu es...</h1>

      <div style={styles.card}>
        <h2 style={styles.pokemonName}>{pokemon.nameFr} !</h2>

        <img
          style={styles.sprite}
          src={pokemon.spriteUrl}
          alt={pokemon.nameFr}
          onError={(e) => {
            e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
          }}
        />

        <div style={styles.typesRow}>
          {pokemon.types.map((t) => (
            <span
              key={t}
              style={{
                ...styles.typeTag,
                background: TYPE_COLORS[t] || '#888',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <p style={{ opacity: 0.7, fontSize: '0.95rem' }}>
          Dresseur : <strong>{pseudo}</strong>
        </p>
        {saved && <p style={styles.saved}>✓ Résultat enregistré dans le classement</p>}
      </div>

      <div style={styles.btnRow}>
        <button
          style={{ ...styles.btn, ...styles.btnPrimary }}
          onClick={() => {
            sessionStorage.removeItem('result');
            navigate('/quiz');
          }}
        >
          Rejouer
        </button>
        <button
          style={{ ...styles.btn, ...styles.btnSecondary }}
          onClick={() => navigate('/leaderboard')}
        >
          Voir le classement
        </button>
        <button
          style={{ ...styles.btn, ...styles.btnSecondary }}
          onClick={() => {
            sessionStorage.clear();
            navigate('/');
          }}
        >
          Accueil
        </button>
      </div>
    </div>
  );
}
