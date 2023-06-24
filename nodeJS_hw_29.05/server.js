const http = require('http');
const fs = require('fs');

let products = [
  { id: 1, name: 'Товар 1', price: 10 },
  { id: 2, name: 'Товар 2', price: 20 },
  { id: 3, name: 'Товар 3', price: 30 },
];

function handleRequest(req, res) {
  const { method, url, headers } = req;

  if (method === 'POST' && url === '/register') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const data = JSON.parse(body);

      fs.appendFile('registrations.txt', JSON.stringify(data) + '\n', err => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end('Internal Server Error');
        } else {
          res.statusCode = 200;
          res.end('Registration successful');
        }
      });
    });
  } else if (method === 'GET' && url === '/products') {
    const params = new URLSearchParams(url.slice(url.indexOf('?') + 1));
    const id = params.get('id');

    if (id) {
      const product = products.find(p => p.id === parseInt(id));
      if (product) {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify(product));
      } else {
        res.statusCode = 404;
        res.end('Product not found');
      }
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(products));
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
}

const server = http.createServer(handleRequest);


server.listen(3000, () => {
  console.log('Server listening on port 3000');
});