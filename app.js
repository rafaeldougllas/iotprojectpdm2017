//Dependencias
const express    = require('express');
const logger     = require('morgan');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');

//Seta o Promise do mongoose para o global do js
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/register');

const app     = express();

//Rotas ************************
const register = require('./routes/register');
//Rotas FIM ********************

//Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());

//Rotas
app.use('/register', register);


//Captura erros 404 e coloca para o manipulador de erros resolver
app.use((req,res,next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});


//Manipulador de erros
app.use((req,res,next) => {
	const error  = app.get('env') === 'development' ? err : {};
	const status = err.status || 500;

	//Resposta ao cliente
	res.status(status).json({
		error:{
			message: error.message
		}
	});

	console.error(err);
});

//Inicia o servidor
const port = app.get('port') || 3000;
app.listen(port, () => console.log('Servidor está ouvindo na porta '+port));
