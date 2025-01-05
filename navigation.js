document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('google-button').addEventListener('click', function() {
      window.location.href = 'google-auth.html'; // target HTML file
  });

  document.getElementById('whatsapp-button').addEventListener('click', function() {
      window.location.href = 'screens/add-number-whatsapp.html'; // target HTML file
  });

  document.getElementById('verify-number').addEventListener('click', function() {
      window.location.href = 'screens/number-whatsapp-verify.html'; // target HTML file
  });
});