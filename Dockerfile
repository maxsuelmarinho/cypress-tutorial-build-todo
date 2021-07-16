FROM node:12-alpine as builder
WORKDIR /app
COPY . .
RUN cp .env.docker .env
RUN npm i
CMD [ "npm", "run", "dev" ]
