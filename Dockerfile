FROM node:8-slim

WORKDIR /app

COPY . /app
COPY .enviroment /app/.enviroment
COPY package.json /app/package.json

ENV NODE_ENV development
RUN npm install

CMD ["npm","start"]

