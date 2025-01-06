document.addEventListener('DOMContentLoaded', function() {
  const setupStoreButton = document.getElementById('setup-store-button');
  if (setupStoreButton) {
    setupStoreButton.addEventListener('click', function() {
      window.location.href = 'store-onboard-about-business.html'; // target HTML file
    });
  } else {
    console.error('Element with ID "setup-store-button" not found.');
  }

  const whatsappButton = document.getElementById('whatsapp-button');
  if (whatsappButton) {
    whatsappButton.addEventListener('click', function() {
      window.location.href = 'screens/add-number-whatsapp.html'; // target HTML file
    });
  } else {
    console.error('Element with ID "whatsapp-button" not found.');
  }
});