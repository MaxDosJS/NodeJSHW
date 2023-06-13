const express = require('express');
const path = require('path');

const apiRouter = require('./routes/api');
const dataRouter = require('./routes/data');

const app = express();
const port = 3000;


app.use(express.json());


app.use('/api', apiRouter);
app.use('/data', dataRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});