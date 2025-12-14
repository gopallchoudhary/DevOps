FROM node:25.2.0-alpine 

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]