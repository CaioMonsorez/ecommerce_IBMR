const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

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

// Endpoint para listar os produtos disponíveis
app.get('/listaProdutos',(req,res) => {
  connection.query('SELECT * FROM Produtos LIMIT 10', (err, results) => {
    if (err) { 
      res.status(404)
      console.log(err)
    };
    res.json(results)
  });
});
// Endpoint para detalhar um produto específico
app.get('/detalharProdutos/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM Produtos WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Erro ao buscar o produto:', err);
      res.status(404).json({ error: 'Erro ao buscar o produto' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Produto não encontrado' });
    } else {
      res.json(results[0]);
    }
  });
});
// Endpoint para cadastrar um novo usuário
app.post('/cadastrarUsuarios', [
  // Validação dos campos de entrada usando o express-validator
  body('name').notEmpty().withMessage('O campo "name" é obrigatório'),
  body('email').isEmail().withMessage('Informe um email válido'),
  body('password').isLength({ min: 6 }).withMessage('A senha deve ter no mínimo 6 caracteres')
], async (req, res) => {
  // Verifique se há erros de validação nos campos de entrada
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    // Verifique se o usuário já está cadastrado com o mesmo email
    const existingUser = await connection.query('SELECT * FROM Usuarios WHERE email = ?', [email]);

    if (existingUser.length > 0) {
      return res.status(409).json({ error: 'Este email já está sendo usado por outro usuário' });
    }

    // Gere um salt aleatório para usar na criptografia da senha
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    // Criptografe a senha fornecida antes de armazená-la no banco de dados
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insira o novo usuário na tabela Usuarios
    await connection.query('INSERT INTO Usuarios (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);

    return res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
});
// Endpoint para atualizar um produto específico no carrinho
app.put('/atualizarCarrinho/:id', (req, res) => {
  const id = req.params.id;
  const updatedProduct = req.body; // Dados atualizados do produto enviado no corpo da requisição
  connection.query('UPDATE Carrinho SET ? WHERE id = ?', [updatedProduct, id], (err, results) => {
    if (err) {
      console.error('Erro ao atualizar o produto no carrinho:', err);
      res.status(500).json({ error: 'Erro ao atualizar o produto no carrinho' });
    } else {
      res.json({ message: 'Produto atualizado no carrinho com sucesso' });
    }
  })
});
// Endpoint para listar os produtos no carrinho
app.get('/listaCarrinho',(req,res) => {
  const id = req.params.id
  connection.query('SELECT * FROM Carrinho', (err, results) => {
    if (err) { 
      res.status(404)
      console.log(err)
    };
    res.json(results)
  });
});
// Endpoint para adicionar um produto no carrinho
app.post('/addCarrinho', (req, res) => {
  const idProduto = req.body.idProduto; // Supondo que o ID do produto esteja no corpo da requisição com o nome "idProduto"
  // Verificar se o produto existe na tabela Produtos antes de adicioná-lo ao carrinho
  const selectQuery = 'SELECT id FROM Produtos WHERE id = ?';
  connection.query(selectQuery, [idProduto], (err, results) => {
    if (err) {
      console.error('Erro ao verificar o produto:', err);
      res.status(500).json({ error: 'Erro ao verificar o produto' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Produto não encontrado' });
      return;
    }
  });
});
// Inicie o servidor e escute a porta definida
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = connection;
