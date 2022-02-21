//importar o módulo express
const express = require('express')

//executar o módulo express
const app = express()

//definir a porta do servidor
const porta = process.env.PORT || 3030

//configurar a localização da pasta assets (css, imagens,js)
app.use(express.static("./assets")
)

//carregar o módulo consign
const consign=require('consign')

//incluir a pasta routes no express
consign().include('./routes').into(app)

//exportar as variáveis app e porta
module.exports = {app,porta}