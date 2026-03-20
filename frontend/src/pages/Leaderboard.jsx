import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchLeaderboard } from '../api';

const styles = {
  container: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '2rem 1.5rem',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  title: {
    fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
    fontWeight: 900,
    background: 'linear-gradient(90deg, #f7d44c, #f76c6c)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  btn: {
    padding: '0.6rem 1.2rem',
    borderRadius: '0.65rem',
    border: '1px solid rgba(255,255,255,0.2)',
    background: 'rgba(255,255,255,0.08)',
    color: '#fff',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0 0.5rem',
  },
  th: {
    textAlign: 'left',
    padding: '0.6rem 1rem',
    opacity: 0.5,
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontWeight: 600,
  },
  row: {
    background: 'rgba(255,255,255,0.06)',
    borderRadius: '0.75rem',
    transition: 'background 0.15s',
  },
  td: {
    padding: '0.85rem 1rem',
    fontSize: '0.95rem',
  },
  tdFirst: {
    borderRadius: '0.75rem 0 0 0.75rem',
  },
  tdLast: {
    borderRadius: '0 0.75rem 0.75rem 0',
  },
  sprite: {
    width: '40px',
    height: '40px',
    objectFit: 'contain',
    verticalAlign: 'middle',
  },
  rank: {
    fontWeight: 700,
    opacity: 0.6,
    width: '2rem',
    textAlign: 'center',
  },
  empty: {
    textAlign: 'center',
    padding: '4rem',
    opacity: 0.5,
    fontSize: '1.1rem',
  },
  loading: {
    textAlign: 'center',
    padding: '4rem',
    opacity: 0.6,
  },
};

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

export default function Leaderboard() {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboard()
      .then(setResults)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🏆 Classement des Dresseurs</h1>
        <button style={styles.btn} onClick={() => navigate('/')}>
          ← Accueil
        </button>
      </div>

      {loading ? (
        <p style={styles.loading}>Chargement...</p>
      ) : results.length === 0 ? (
        <p style={styles.empty}>Aucun résultat pour l'instant. Sois le premier !</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.th, width: '2.5rem' }}>#</th>
              <th style={styles.th}>Dresseur</th>
              <th style={styles.th}>Pokémon</th>
              <th style={styles.th}>Sprite</th>
              <th style={styles.th}>Date</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, idx) => (
              <tr key={r.id} style={styles.row}>
                <td style={{ ...styles.td, ...styles.tdFirst, ...styles.rank }}>{idx + 1}</td>
                <td style={styles.td}><strong>{r.pseudo}</strong></td>
                <td style={styles.td}>{r.pokemon}</td>
                <td style={styles.td}>
                  <img
                    style={styles.sprite}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${r.pokemonId}.png`}
                    alt={r.pokemon}
                  />
                </td>
                <td style={{ ...styles.td, ...styles.tdLast, opacity: 0.55, fontSize: '0.85rem' }}>
                  {formatDate(r.createdAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
