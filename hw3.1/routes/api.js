const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send('Привет, это API!');
});

module.exports = router;