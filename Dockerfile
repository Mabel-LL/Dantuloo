# Stage 1: Build the Angular application
FROM node:18-alpine as build

# Set the working directory
WORKDIR /app

# Copy the application files
COPY . .

# Install the dependencies
RUN npm install

# Build the Angular application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output to replace the default Nginx contents.
COPY --from=build /app/dist/dantuloo /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
