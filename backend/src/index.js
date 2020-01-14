const express = require('express');
const monggose = require('mongoose');
const routes = require('./routes');

const app = express();

monggose.connect('mongodb+srv://omnistack:omnistack@cluster0-moyjw.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(express.json());
app.use(routes);
app.listen(3333);


//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:
//Query Params: request.query(filtros,ordenação, paginação) 
  //São utilizados apenas no 
  //método GET -> eles so são usados para 
  //se realizar uma requisição que possui 
  //algum tipo de parametro de filtragem 
  //condicional

//Route Params: request.params(Identificar um recurso na alteração ou deleção) 
  //Estes são utilizados nos métodos
  //PUT e DELETE, onde eu realizao uma ação em um determinado
  //Elemento especifico, de acordo com o nome ou id

//Body: request.body(Dados para alterção ou criação de um registro)
  //serve para quando eu quero realizar
  //uma requisição com corpo, a qual possui um
  //grupo de informações

//MongoDB (Não-relacional)