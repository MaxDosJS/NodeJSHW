const path = require('path');

const fs = require('fs');

const data = {
  firstName: 'Damir',
  lastName: 'Dam',
  dateOfBirth: '1950-02-04'
};

const jsonData = JSON.stringify(data);

fs.writeFile('personalInfo.json', jsonData, (err) => {
  if (err) throw err;
  console.log('Информация сохранена в файл.');
});