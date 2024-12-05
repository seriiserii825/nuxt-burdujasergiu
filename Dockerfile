# Use the official Node.js 14 image (compatible with Nuxt 2.15)
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application source code
COPY . .

# Expose port 3000 for Nuxt
EXPOSE 3000

# Set the default command to start Nuxt in development mode
CMD ["npm", "run", "dev"]
