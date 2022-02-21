#Especificamos la version a descargar de node
FROM node:12
#crea la carpeta
WORKDIR /usr/src/app
#Copear los archivos .json y los manda al docker
COPY package*.json ./
RUN npm install
COPY . .
# Va a exponer el puerto 3000 para usarlo
EXPOSE ${NEST_PORT}
CMD ["npm", "run", "start:dev"]
# a no mames es todo jaja

