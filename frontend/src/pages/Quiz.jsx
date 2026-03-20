import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchQuestions, submitAnswers } from '../api';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '2rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  pseudo: {
    fontSize: '1.1rem',
    opacity: 0.7,
    marginBottom: '0.5rem',
  },
  progressBar: {
    width: '100%',
    maxWidth: '560px',
    height: '8px',
    background: 'rgba(255,255,255,0.15)',
    borderRadius: '4px',
    overflow: 'hidden',
    margin: '0 auto 0.5rem',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #f7d44c, #f76c6c)',
    transition: 'width 0.4s ease',
    borderRadius: '4px',
  },
  progressText: {
    fontSize: '0.85rem',
    opacity: 0.55,
    textAlign: 'center',
    marginBottom: '2rem',
  },
  card: {
    background: 'rgba(255,255,255,0.08)',
    borderRadius: '1.5rem',
    padding: '2.5rem',
    maxWidth: '560px',
    width: '100%',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.12)',
  },
  question: {
    fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
    fontWeight: 600,
    marginBottom: '1.75rem',
    lineHeight: 1.4,
  },
  answerBtn: {
    display: 'block',
    width: '100%',
    padding: '0.9rem 1.2rem',
    marginBottom: '0.85rem',
    borderRadius: '0.85rem',
    border: '2px solid rgba(255,255,255,0.18)',
    background: 'rgba(255,255,255,0.06)',
    color: '#fff',
    fontSize: '0.98rem',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'background 0.15s, border-color 0.15s, transform 0.1s',
  },
  answerBtnHover: {
    background: 'rgba(247, 212, 76, 0.2)',
    borderColor: '#f7d44c',
  },
  loading: {
    textAlign: 'center',
    padding: '3rem',
    opacity: 0.7,
    fontSize: '1.1rem',
  },
};

export default function Quiz() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [hovered, setHovered] = useState(null);
  const pseudo = sessionStorage.getItem('pseudo');

  useEffect(() => {
    if (!pseudo) { navigate('/'); return; }
    fetchQuestions()
      .then(setQuestions)
      .catch(() => navigate('/'))
      .finally(() => setLoading(false));
  }, []);

  async function handleAnswer(answerId) {
    const question = questions[current];
    const newAnswers = [...answers, { questionId: question.id, answerId }];
    setAnswers(newAnswers);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setHovered(null);
    } else {
      // Toutes les questions répondues → calcul du résultat
      setSubmitting(true);
      try {
        const data = await submitAnswers(newAnswers);
        sessionStorage.setItem('result', JSON.stringify(data.pokemon));
        navigate('/result');
      } catch {
        alert('Une erreur est survenue. Réessaie !');
        setSubmitting(false);
      }
    }
  }

  if (loading) return <div style={styles.loading}>Chargement des questions...</div>;
  if (submitting) return <div style={styles.loading}>Calcul de ton Pokémon en cours... ⚡</div>;
  if (questions.length === 0) return null;

  const question = questions[current];
  const progress = ((current) / questions.length) * 100;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <p style={styles.pseudo}>Dresseur : {pseudo}</p>
      </div>

      <div style={{ width: '100%', maxWidth: '560px' }}>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${progress}%` }} />
        </div>
        <p style={styles.progressText}>
          Question {current + 1} / {questions.length}
        </p>
      </div>

      <div style={styles.card}>
        <p style={styles.question}>{question.text}</p>
        {question.answers.map((answer) => (
          <button
            key={answer.id}
            style={{
              ...styles.answerBtn,
              ...(hovered === answer.id ? styles.answerBtnHover : {}),
            }}
            onMouseEnter={() => setHovered(answer.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleAnswer(answer.id)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}
