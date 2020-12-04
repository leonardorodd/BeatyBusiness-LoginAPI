FROM node:alpine
WORKDIR /app
COPY ./package.json /app/
RUN npm install --only=production
COPY . /app
EXPOSE 5000
CMD ["npm", "start"]

FROM nginx:alpine
COPY  cert_https/cert.pem /etc/nginx/ssl
COPY  cert_https/key.pem /etc/nginx/ssl
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

