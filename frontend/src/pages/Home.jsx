import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    background: 'linear-gradient(90deg, #f7d44c, #f76c6c)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: 'none',
  },
  subtitle: {
    fontSize: '1.1rem',
    opacity: 0.7,
    marginBottom: '3rem',
  },
  card: {
    background: 'rgba(255,255,255,0.08)',
    borderRadius: '1.5rem',
    padding: '2.5rem',
    maxWidth: '420px',
    width: '100%',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.12)',
  },
  label: {
    display: 'block',
    marginBottom: '0.75rem',
    fontSize: '1rem',
    opacity: 0.85,
  },
  input: {
    width: '100%',
    padding: '0.85rem 1rem',
    borderRadius: '0.75rem',
    border: '2px solid rgba(255,255,255,0.2)',
    background: 'rgba(255,255,255,0.1)',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
    marginBottom: '1.5rem',
    transition: 'border-color 0.2s',
  },
  button: {
    width: '100%',
    padding: '0.9rem',
    borderRadius: '0.75rem',
    border: 'none',
    background: 'linear-gradient(135deg, #f7d44c, #f76c6c)',
    color: '#1a1a2e',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'transform 0.15s, box-shadow 0.15s',
  },
  nav: {
    marginTop: '2rem',
    opacity: 0.6,
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: '0.9rem',
  },
  pokeball: {
    fontSize: '5rem',
    marginBottom: '1rem',
    animation: 'spin 4s linear infinite',
  },
};

export default function Home() {
  const [pseudo, setPseudo] = useState('');
  const navigate = useNavigate();

  function handleStart(e) {
    e.preventDefault();
    const trimmed = pseudo.trim();
    if (!trimmed) return;
    sessionStorage.setItem('pseudo', trimmed);
    navigate('/quiz');
  }

  return (
    <div style={styles.container}>
      <div style={styles.pokeball}>⚪</div>
      <h1 style={styles.title}>Quel Pokémon es-tu ?</h1>
      <p style={styles.subtitle}>
        Réponds à 10 questions et découvre ton Pokémon parmi les 151 originaux !
      </p>

      <div style={styles.card}>
        <form onSubmit={handleStart}>
          <label style={styles.label} htmlFor="pseudo">
            Ton pseudo de Dresseur
          </label>
          <input
            id="pseudo"
            style={styles.input}
            type="text"
            placeholder="Ash, Misty, Brock..."
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            maxLength={50}
            required
            autoFocus
          />
          <button style={styles.button} type="submit">
            Commencer le Quiz →
          </button>
        </form>
      </div>

      <span
        style={styles.nav}
        onClick={() => navigate('/leaderboard')}
      >
        Voir le classement des Dresseurs
      </span>
    </div>
  );
}
