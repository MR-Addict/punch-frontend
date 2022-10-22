FROM node:16-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -ci
COPY . .
RUN npm run build

FROM node:16-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/build /usr/src/app
EXPOSE 3000
CMD [ "npx", "serve" ]