const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');

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


  if (email === 'user@example.com' && password === 'password') {
    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;