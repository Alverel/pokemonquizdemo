FROM node:20-alpine

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./
COPY prisma ./prisma/

# Installer les dépendances (inclut prisma generate via postinstall)
RUN npm ci --only=production

# Copier le code source
COPY src ./src

# Copier le frontend buildé (généré par la commande de build racine)
COPY public ./public

EXPOSE 3001

CMD ["sh", "-c", "npx prisma migrate deploy && node src/index.js"]
