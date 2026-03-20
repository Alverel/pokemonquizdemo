FROM node:20-alpine

# OpenSSL requis par Prisma sur Alpine
RUN apk add --no-cache openssl

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./
COPY prisma ./prisma/

# Installer toutes les dépendances (prisma CLI est en devDep, requis pour db push)
RUN npm ci

# Copier le code source et le script de démarrage
COPY src ./src
COPY entrypoint.sh ./
RUN chmod +x entrypoint.sh

EXPOSE 3001

CMD ["./entrypoint.sh"]
