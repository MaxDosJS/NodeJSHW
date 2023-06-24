const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const fs = require('fs');

app.use(express.static('public'));
app.use(express.json());

const router = express.Router();

router.get('/data', (req, res) => {
  const filePath = path.join(__dirname, 'data.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Произошла ошибка сервера');
    } else {
      const dataArray = JSON.parse(data);
      res.json(dataArray);
    }
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const validEmail = process.env.EMAIL || 'user@example.com';
  const validPassword = process.env.PASSWORD || 'password';

  if (email === validEmail && password === validPassword) {
    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
});

app.use('/', router);

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});