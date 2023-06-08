const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3030;


app.use(cors());


app.get('/', (req, res) => {
  // Ler o arquivo JSON
  const jsonData = fs.readFileSync('src/produto.json', 'utf8');
  // Converter o conteúdo do arquivo em objeto JavaScript
  const data = JSON.parse(jsonData);
  // Enviar o objeto como resposta
  res.json(data);
});


app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
});
