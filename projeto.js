const Sequelize = require('sequelize')
const sequelize = new Sequelize('bancoDeDados', 'seu_usuario', 'sua_senha', {
host: "localhost",
dialect: 'mysql'
})

const Usuario = sequelize.define('usuarios', {
nome: {
type: Sequelize.STRING
},

sobrenome: {
type: Sequelize.STRING
},

idade: {
type: Sequelize.INTEGER
},

email: {
type: Sequelize.STRING
}
})

Usuario.create({
nome: "Renilton",
sobrenome: "Ribeiro",
idade: 21,
email: "reniltonalmeida20@hotmail.com"
})


