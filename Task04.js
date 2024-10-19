document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    document.getElementById('confirmationMessage').style.display = 'block';
    setTimeout(() => {
      document.getElementById('confirmationMessage').style.display = 'none';
      document.getElementById('contactForm').reset();
    }, 3000);
  }
});
