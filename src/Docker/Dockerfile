# Use the official Node.js 
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build TypeScript files
RUN npm run build

# Set environment variables
ENV NODE_ENV production
ENV PORT 3000

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["node", "dist/server.js"]
