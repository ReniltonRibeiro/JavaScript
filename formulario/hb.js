const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize')

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

const sequelize = new Sequelize ('bancoDeDados', 'seu_usuario', 'sua_senha', {
host: "localhost",
dialect: 'mysql'
})

app.get('/cad', function(req, res){
res.render('formulario')
})

app.listen(8021, function(){
console.log("Servidor Rodando na url http://localhost:8021");
});
