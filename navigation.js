document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('google-button').addEventListener('click', function() {
      window.location.href = 'google-auth.html'; // target HTML file
  });

  document.getElementById('whatsapp-button').addEventListener('click', function() {
      window.location.href = 'screens/add-number-whatsapp.html'; // target HTML file
  });
});