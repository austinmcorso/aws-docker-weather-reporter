FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy app
COPY index.js .
COPY config.json .

CMD node index.js

EXPOSE 8080
