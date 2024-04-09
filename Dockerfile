FROM node:lts AS production
WORKDIR /react
COPY . .
RUN npm install
RUN npm run build
