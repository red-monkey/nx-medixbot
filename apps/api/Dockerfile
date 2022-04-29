FROM node:17.9.0-alpine

RUN mkdir -p /usr/src/medixbot-api

WORKDIR /usr/src/medixbot-api

COPY dist .

ENV PORT=8081

RUN yarn install --pure-lockfile
RUN yarn add compression
RUN yarn add lodash

CMD node ./main.js

EXPOSE ${PORT}
