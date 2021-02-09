async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#name').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/gallery');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.hero-form').addEventListener('submit', loginFormHandler);