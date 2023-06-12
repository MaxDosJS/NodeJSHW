const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, jsonString) => {
  if (err) throw err;
  
  const data = JSON.parse(jsonString);
  console.log('Текущее значение count:', data.count);
  
  data.count += 1;
  
  if (data.count === data.target) {
    throw new Error('Счётчик уже максимальный');
  }
  
  const updatedJsonString = JSON.stringify(data);
  
  fs.writeFile('data.json', updatedJsonString, (err) => {
    if (err) throw err;
    console.log('Файл обновлен.');
  });
});