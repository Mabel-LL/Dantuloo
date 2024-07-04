# Stage 1: Build the Angular application
FROM node:18-alpine as build

# Set the working directory
WORKDIR /app

# Copy the application files
COPY package*.json ./
RUN npm install


# Build the Angular application
RUN npm run build

RUN npm install -g netlify-cli

# Set the entrypoint for the container
ENTRYPOINT ["sh", "-c", "netlify deploy --dir=dist/dantuloo --prod --auth $NETLIFY_AUTH_TOKEN --site $NETLIFY_SITE_ID"]
