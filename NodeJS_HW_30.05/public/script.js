const loginForm = document.getElementById('login-form');
const dataTableBody = document.querySelector('#data-table tbody');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const formData = {
    email: email,
    password: password
  };

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      console.log('Успешный вход');
    } else {
      console.log('Ошибка входа');
    }
  })
  .catch(error => {
    console.error('Произошла ошибка', error);
  });
});

function createTableRow(data) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${data.id}</td>
    <td>${data.name}</td>
    <td>${data.price}</td>
  `;
  return row;
}

function fetchData() {
  fetch('/data')
    .then(response => response.json())
    .then(dataArray => {
      dataTableBody.innerHTML = '';
      dataArray.forEach(data => {
        const row = createTableRow(data);
        dataTableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Произошла ошибка при загрузке данных', error);
    });
}

document.addEventListener('DOMContentLoaded', fetchData);