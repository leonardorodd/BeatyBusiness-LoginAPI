const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');

var cors = require('cors');
var https = require('https');
/* var fs = require('fs');
 */var path = require('path');

require('dotenv').config({  
	path: process.env.NODE_ENV === "test" ? ".env.development" : ".env.production"
})

//Certificados SSL HTTPS
/* var httpsOptions = {
	key: fs.readFileSync(path.resolve('cert_https/key.pem')),
	cert: fs.readFileSync(path.resolve('cert_https/cert.pem'))
}; */

//Parse do corpo das requisições para JSON
app.use(bodyParser.json());

//Permitir dotfiles - necessário para verificação feita pelo Lets Encrypt's certbot
app.use(express.static(path.join(__dirname, 'build'), {dotfiles: 'allow'}));

//CORS policy para interoperabilidade interdomínio
app.use(cors());

//Objeto router (gerenciamento de rotas)
//app.use(router);
app.get('/', function(req, res) {
	res.send('<h1>teste</h1>');
});

/* https.createServer(httpsOptions, app).listen(process.env.PORT, process.env.HOST, function () {
   console.log('Login API listening at https://%s:%s/', process.env.HOST, process.env.PORT)
}); */

app.listen(process.env.PORT, process.env.HOST, function () {
	console.log('Login API listening at http://%s:%s/', process.env.HOST, process.env.PORT)
})