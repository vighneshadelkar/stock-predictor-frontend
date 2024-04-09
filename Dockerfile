FROM node:21-slim
WORKDIR /react

COPY . .

RUN npm run build
