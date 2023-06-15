// const http = require('http');
// const server = http.createServer((req, res) =>{
//     console.log('URL', req.url)
// res.end('<h1>foi <h1>')

// })


// server.listen(3001, 'localhost', () => {
//     console.log("Servidor de pé em: http://localhost:3001")
// console.log("para derrubar o servidor: é só apertar ctrl + c")

// })

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  console.log('URL', req.url);

  if (req.url === '/') {
    // Rota para a página inicial
    const filePath = path.join(__dirname, 'index.html');
    return serveFile(res, filePath, 'text/html');
  }

  if (req.url === '/script.js') {
    // Rota para o arquivo JavaScript
    const filePath = path.join(__dirname, 'script.js');
    return serveFile(res, filePath, 'text/javascript');
  }

  if (req.url === '/style.css') {
    // Rota para o arquivo CSS
    const filePath = path.join(__dirname, 'style.css');
    return serveFile(res, filePath, 'text/css');
  }

  // Rota ou recurso não encontrado
  res.statusCode = 404;
  res.end('Página não encontrada');
});

function serveFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Erro interno do servidor');
    } else {
      res.setHeader('Content-Type', contentType);
      res.end(data);
    }
  });
}

server.listen(3001, 'localhost', () => {
  console.log('Servidor de pé em: http://localhost:3001');
  console.log('Para derrubar o servidor: é só apertar Ctrl + C');
});
