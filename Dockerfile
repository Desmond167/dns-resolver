# Use the official Node.js image with version 21.6.1 as the base image
FROM node:20-alpine3.18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY dns-resolver/package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the working directory
COPY dns-resolver/* .