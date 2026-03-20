FROM node:20-alpine

# OpenSSL requis par Prisma sur Alpine
RUN apk add --no-cache openssl

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./
COPY prisma ./prisma/

# Installer les dépendances (inclut prisma generate via postinstall)
RUN npm ci --only=production

# Copier le code source
COPY src ./src

EXPOSE 3001

CMD ["sh", "-c", "npx prisma db push --accept-data-loss && node src/index.js"]
