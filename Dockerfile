FROM node:19

WORKDIR /app/
COPY . .

RUN npm i
