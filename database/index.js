const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');

const app = express();
const port = 8010; // Defina a porta desejada

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'example',
  database: 'ecommerce',
});


app.use(bodyParser.json());

// Conecte-se ao banco de dados usando a conexão configurada:

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Conexão bem-sucedida com o banco de dados');
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  }
})();


// Endpoint para listar os produtos disponíveis
app.get('/listaProdutos', async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM Produtos LIMIT 10');
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar os produtos:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});
// Endpoint para detalhar um produto específico
app.get('/detalharProdutos/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const [rows, fields] = await pool.query('SELECT * FROM Produtos WHERE id = ?', [id]);
    if (rows.length === 0) {
      res.status(404).json({ error: 'Produto não encontrado' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error('Erro ao buscar o produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});
// Endpoint para cadastrar um novo usuário
app.post('/cadastrarUsuarios', async (req, res) => {
  const { name, email, password } = req.body;
  try {    
    const [rows, fields] = await pool.query('INSERT INTO Usuarios (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
    return res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
});
// Endpoint para adicionar um produto no carrinho
app.post('/addCarrinho', async (req, res) => {
  const { userId, idProduto, qtd } = req.body;
  try {
   // Inserir o produto no carrinho do usuário
   await pool.query('INSERT INTO Carrinho (usuario_id, produto_id, quantidade, data_adicao) VALUES (?, ?, ?, now())', [userId, idProduto, qtd]);

   res.json({ message: 'Produto adicionado ao carrinho com sucesso' });
 } catch (error) {
   console.error('Erro ao adicionar o produto ao carrinho:', error);
   res.status(500).json({ error: 'Erro interno do servidor' });
 }
});
// Endpoint para listar os produtos no carrinho
app.get('/listarCarrinho', async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM Carrinho LIMIT 10');
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar os produtos:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});
// Endpoint para atualizar um produto específico no carrinho
app.delete('/deletarCarrinho/:id', async (req, res) => {
  const id = req.params.id;
  await pool.query('DELETE FROM Carrinho WHERE id = ?', [id], (err, res) => {
    if (err) {
      console.error('Erro ao excluir o produto do carrinho:', err);
      res.status(500).json({ error: 'Erro ao excluir o produto do carrinho' });
    } res.json({ message: 'Produto excluído do carrinho com sucesso' });
  });
});

app.post('/addFavoritos', async (req, res) => {
  const { userId, idProduto} = req.body;
  try {
   // Inserir o produto no carrinho do usuário
   await pool.query('INSERT INTO Favoritos (usuario_id, produto_id) VALUES (?, ?)', [userId, idProduto]);

   res.json({ message: 'Produto adicionado ao favoritos com sucesso' });
 } catch (error) {
   console.error('Erro ao adicionar o produto ao favoritos:', error);
   res.status(500).json({ error: 'Erro interno do servidor' });
 }
});

app.delete('/deletarFavoritos/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query('DELETE FROM Favoritos WHERE id = ?', [id]);
    console.log(result)
    if (result[0].affectedRows === 0) {
      res.status(404).json({ error: 'Produto não encontrado na lista de Favoritos' });
    } else {
      res.json({ message: 'Produto excluído do Favoritos com sucesso' });
    }
  } catch (error) {
    console.error('Erro ao excluir o produto do Favoritos:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});



// Inicie o servidor e escute a porta definida
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

