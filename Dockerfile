FROM node:8-slim AS node-app

WORKDIR /app
ENV NODE_ENV production

COPY package.json /app/package.json

RUN npm i -g nodemon
RUN npm install

COPY . /app

CMD ["npm","run", "server"]