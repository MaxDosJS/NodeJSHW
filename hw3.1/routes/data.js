const express = require('express');
const router = express.Router();
const fs = require('fs/promises');
const path = require('path');


router.get('/', async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, '../db.json'), 'utf-8');
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } catch (error) {
    res.status(500).send('Ошибка сервера');
  }
});

module.exports = router;