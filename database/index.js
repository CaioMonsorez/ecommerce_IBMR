const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 8010; // Defina a porta desejada

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

// Defina as rotas e as operações que deseja realizar no banco de dados.
app.get('/', (req, res) => {
  connection.query('SELECT * FROM produtos', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os produtos:', err);
      res.status(500).json({ error: 'Erro ao buscar os produtos' });
    } else {
      res.json(results);
    }
  });
});



// Inicie o servidor e escute a porta definida
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = connection;
