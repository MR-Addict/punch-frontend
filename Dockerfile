FROM node:16-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install -ci
EXPOSE 3000
CMD [ "npx", "serve", "build" ]