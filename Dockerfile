# Usa una imagen base oficial de Node.js
FROM node:18

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de la aplicación en el directorio de trabajo
COPY . .

# Construye el proyecto Angular
RUN npm run build --prod

# Instala Netlify CLI globalmente
RUN npm install -g netlify-cli

# Comando por defecto para ejecutar el despliegue
CMD ["sh", "-c", "netlify deploy --dir=dist/dantuloo --prod --auth $NETLIFY_AUTH_TOKEN --site $NETLIFY_SITE_ID"]
