FROM node:lts-alpine

WORKDIR /usr/src/app

COPY ["package*.json", "next.config.js", "prisma", "./"]

RUN npm install
RUN npx prisma generate

CMD ["npm", "run", "dev"]
