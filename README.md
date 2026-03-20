# Quel Pokémon es-tu ? 🎮

Application web de quiz de personnalité pour découvrir lequel des 151 Pokémon originaux tu es.

## Stack

| Couche | Technologie |
|---|---|
| Backend | Node.js + Express |
| Frontend | React 18 + Vite |
| Base de données | PostgreSQL |
| ORM | Prisma |
| Déploiement | Railway / Docker |

## Architecture

```
pokemonquizdemo/
├── backend/
│   ├── prisma/schema.prisma       # Modèle BDD
│   ├── src/
│   │   ├── index.js               # Point d'entrée Express
│   │   ├── routes/
│   │   │   ├── quiz.js            # GET /api/quiz/questions, POST /api/quiz/result
│   │   │   └── leaderboard.js     # GET /api/leaderboard, POST /api/save
│   │   └── quiz/
│   │       ├── questions.js       # 10 questions + pondérations
│   │       ├── pokemonData.js     # Profils des 151 Pokémon
│   │       └── algorithm.js      # Produit scalaire utilisateur ↔ Pokémon
│   └── Dockerfile
├── frontend/
│   └── src/pages/
│       ├── Home.jsx               # Saisie du pseudo
│       ├── Quiz.jsx               # 10 questions
│       ├── Result.jsx             # Résultat + sprite
│       └── Leaderboard.jsx        # Classement
├── docker-compose.yml
├── railway.json
└── package.json                   # Scripts racine
```

## Installation locale

### Prérequis

- Node.js 20+
- PostgreSQL 14+ (ou Docker)

### Étape 1 – Cloner et installer les dépendances

```bash
git clone <repo-url>
cd pokemonquizdemo
npm run install:all
```

### Étape 2 – Configurer les variables d'environnement

```bash
cp backend/.env.example backend/.env
# Édite backend/.env avec ta DATABASE_URL
```

Exemple `.env` :
```env
DATABASE_URL="postgresql://user:password@localhost:5432/pokemonquiz"
PORT=3001
```

### Étape 3 – Initialiser la base de données

```bash
npm run db:push
# ou, si tu utilises les migrations :
npm run db:migrate
```

### Étape 4 – Lancer en développement

Dans deux terminaux séparés :

```bash
# Terminal 1 – Backend
npm run dev:backend

# Terminal 2 – Frontend
npm run dev:frontend
```

- Frontend : http://localhost:5173
- Backend API : http://localhost:3001/api

### Avec Docker Compose (tout-en-un)

```bash
# Build du frontend (copié dans backend/public)
npm run build

# Lancer PostgreSQL + Backend
docker-compose up --build
```

Application disponible sur http://localhost:3001

---

## Déploiement Railway

### Prérequis Railway

1. Compte Railway (railway.app)
2. CLI Railway : `npm install -g @railway/cli`

### Étapes

```bash
# 1. Connexion
railway login

# 2. Créer un nouveau projet
railway new

# 3. Ajouter PostgreSQL
railway add --plugin postgresql

# 4. Définir les variables d'environnement
railway variables set PORT=3001

# 5. Builder le frontend avant de déployer
npm run build

# 6. Déployer
railway up
```

Railway détecte automatiquement le `railway.json` et utilise le `Dockerfile` du backend.

La variable `DATABASE_URL` est automatiquement injectée par le plugin PostgreSQL de Railway.

---

## Algorithme de quiz

### Dimensions

Le système utilise **23 dimensions** réparties en deux catégories :

- **Types** (15) : `fire`, `water`, `grass`, `electric`, `psychic`, `fighting`, `normal`, `poison`, `ground`, `rock`, `ice`, `ghost`, `dragon`, `bug`, `flying`
- **Traits** (8) : `brave`, `calm`, `energetic`, `mysterious`, `fierce`, `wise`, `playful`, `solitary`

### Fonctionnement

1. Chaque question comporte 4 réponses. Chaque réponse ajoute des points à un sous-ensemble de dimensions.
2. À la fin du quiz, les scores sont agrégés en un vecteur utilisateur.
3. Un **produit scalaire** est calculé entre ce vecteur et le profil de chacun des 151 Pokémon.
4. Le Pokémon avec le score le plus élevé est retourné.

### Garantie des 151 chemins

Chaque Pokémon possède un profil de dimensions unique. Avec 10 questions et 4 réponses chacune (4¹⁰ ≈ 1 million de chemins possibles), tous les profils Pokémon sont atteignables par une combinaison de réponses spécifique.

---

## API

| Méthode | Route | Description |
|---|---|---|
| `GET` | `/api/quiz/questions` | Retourne les 10 questions |
| `POST` | `/api/quiz/result` | Calcule le Pokémon selon les réponses |
| `POST` | `/api/save` | Sauvegarde pseudo + résultat en BDD |
| `GET` | `/api/leaderboard` | Retourne les 100 derniers résultats |

### Exemple POST /api/quiz/result

```json
// Body
{
  "answers": [
    { "questionId": 1, "answerId": 0 },
    { "questionId": 2, "answerId": 2 }
  ]
}

// Réponse
{
  "pokemon": {
    "id": 25,
    "name": "Pikachu",
    "nameFr": "Pikachu",
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    "types": ["electric"]
  }
}
```

---

## Données Pokémon

Source des sprites : [PokeAPI Sprites](https://github.com/PokeAPI/sprites)
Source des données : [PokéAPI](https://pokeapi.co)
