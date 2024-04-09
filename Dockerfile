FROM node:lts AS development
WORKDIR /react
COPY . .
RUN npm run build
