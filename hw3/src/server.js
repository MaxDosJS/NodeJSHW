const express = require('express');
const fs = require('fs/promises');

const app = express();
const PORT = 3000;

app.get('/:topic', async (req, res) => {
  const { topic } = req.params;
  
  try {
    const data = await fs.readFile(`${topic}.txt`, 'utf-8');
    res.send(data);
  } catch (error) {
    res.send('Извините, ваш запрос недоступен');
  }
});


app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});