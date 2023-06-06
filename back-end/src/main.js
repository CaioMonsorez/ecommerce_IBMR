const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const mysql = require('mysql2');
const port = 3030;

app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'example',
  database: 'ecommerce',
});

// Conecte-se ao banco de dados usando a conexão configurada:
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão bem-sucedida com o banco de dados');
  }
});

app.get('/', (req, res) => {
  // Ler o arquivo JSON
  const jsonData = fs.readFileSync('src/produto.json', 'utf8');
  // Converter o conteúdo do arquivo em objeto JavaScript
  const data = JSON.parse(jsonData);
  // Enviar o objeto como resposta
  res.json(data);
});


app.get('/listaProdutos',(req,res) => {
  connection.query('SELECT * FROM Produtos LIMIT 10', (err, results) => {
    if (err) { 
      res.status(404)
      console.log(err)
    };
    res.json(results)
  });
});

app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
});
