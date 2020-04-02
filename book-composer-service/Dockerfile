FROM node:12-alpine
# Create app directory
WORKDIR /usr/src/app
# Copy app files
COPY package*.json service.js ./
# Install app dependenciies
RUN npm install
# Bundle app source
COPY . .
# Map the app port
EXPOSE 8080
# Define the command to run the app
CMD [ "node", "service.js" ]

