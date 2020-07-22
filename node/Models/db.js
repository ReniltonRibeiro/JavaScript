const Sequelize = require('sequelize')

const sequelize = new Sequelize ('postapp', 'seu_usuario', 'sua_senha', {
host: "localhost",
dialect: 'mysql'
})

module.exports = {
Sequelize: Sequelize,
sequelize: sequelize
}

