FROM node:8-slim AS node-app

WORKDIR /app
ENV NODE_ENV production

COPY package.json /app/package.json

RUN npm install pm2 -g
RUN npm install

COPY . /app

CMD ["pm2-runtime", "src/server/start.js", "-i", "3"]