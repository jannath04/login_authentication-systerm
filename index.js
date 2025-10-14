
const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

const users = [
  { username: 'user1', password: 'pass123' },
  { username: 'admin', password: 'admin123' }
];

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = loginForm.username.value.trim();
  const password = loginForm.password.value;


  const matched = users.find(u => u.username === username && u.password === password);

  if (matched) {

    errorMsg.textContent = '';
    alert('Login successful! Welcome, ' + matched.username);


  } else {
    errorMsg.textContent = 'Invalid username or password';
  }

  loginForm.password.value = '';
});
