FROM node:12-alpine as builder
WORKDIR /app
COPY . .
RUN npm i
CMD [ "npm", "run", "dev:docker" ]
