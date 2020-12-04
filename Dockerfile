FROM node:alpine
WORKDIR /app
COPY ./package.json /app/
RUN npm install --only=production
COPY . /app
EXPOSE 5000
CMD ["npm", "start"]

FROM nginx:alpine
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

