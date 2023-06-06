const fs = require('fs');
const mysql = require('mysql2');

const filePath = './produto.json'; // Especifique o caminho correto para o arquivo produtos.json

// Lê o conteúdo do arquivo produtos.json
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  try {
    const json = JSON.parse(data);
    const results = json.results;

    // Mapeia apenas os campos desejados dos objetos em results
    const mappedResults = results.slice(0, 10).map(item => ({
      id: item.id,
      title: item.title,
      thumbnail: item.thumbnail,
      price: item.price,
      sold_quantity: item.sold_quantity
    }));

    console.log(mappedResults);

    // Configurar a conexão com o banco de dados
    const connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'example',
      database: 'ecommerce',
    });

    // Conectar ao banco de dados
    connection.connect((err) => {
      if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
      }

      console.log('Conexão bem-sucedida com o banco de dados');

      // Inserir os elementos na tabela
      const insertPromises = mappedResults.map(element => {
        const query = 'INSERT INTO Produtos (id, name, thumbnail, price, stock, category) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [element.id, element.title, element.thumbnail, element.price, element.sold_quantity, 'Celular'];

        return new Promise((resolve, reject) => {
          connection.query(query, values, (err, results) => {
            if (err) {
              reject(err);
            } else {
              console.log('Elemento inserido com sucesso:', element);
              resolve();
            }
          });
        });
      });

      // Executar as inserções em paralelo
      Promise.all(insertPromises)
        .then(() => {
          console.log('Todos os elementos foram inseridos com sucesso');
        })
        .catch(err => {
          console.error('Erro ao inserir os elementos:', err);
        })
        .finally(() => {
          // Fechar a conexão com o banco de dados
          connection.end();
        });
    });
  } catch (error) {
    console.error('Erro ao processar o arquivo JSON:', error);
  }
});
