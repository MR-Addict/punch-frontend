FROM node:16-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install -ci
RUN npm run build
EXPOSE 3000
CMD [ "npx", "serve", "build" ]