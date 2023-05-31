FROM node:lts
WORKDIR /app
COPY ./src/ ./src
COPY package*.json ./
RUN npm install
EXPOSE 3030
CMD ["npm", "run", "start"]