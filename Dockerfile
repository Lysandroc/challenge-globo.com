FROM node:8-slim

WORKDIR /app
ENV NODE_ENV development

COPY package.json /app/package.json

RUN npm install -g pm2
RUN npm install

COPY . /app

# CMD ["npm","start"]
CMD ["pm2", "start", "--no-daemon", "start.js"]

EXPOSE 3001
