# Use stable Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy rest of the project files
COPY . .

# Build React app
RUN npm run build

# Install serve to run production build
RUN npm install -g serve

# Expose port
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "build", "-l", "3000"]
