//code for naviagting between screens 
document.addEventListener('DOMContentLoaded', function() {
    const setupStoreButton = document.getElementById('setup-store-button');
    if (setupStoreButton) {
      setupStoreButton.addEventListener('click', function() {
        window.location.href = 'store-onboard-about-business.html'; // From "welcome to shopy screen" to adding business details
      });
    } else {
      console.error('Element with ID "setup-store-button" not found.');
    }
  
    const whatsappButton = document.getElementById('whatsapp-button');
    if (whatsappButton) {
      whatsappButton.addEventListener('click', function() {
        window.location.href = 'screens/add-number-whatsapp.html'; // Continue with whatsapp screen to adding phone number
      });
    } else {
      console.error('Element with ID "whatsapp-button" not found.');
    }

    const productDetails = document.getElementById('added-product-onboarding-screen');
    if (productDetails) {
        productDetails.addEventListener('click', function() {
        window.location.href = '../screens/store-onboard-add-payments.html'; // From adding product details to adding payment methods
      });
    } else {
      console.error('Element with ID "added-product-onboarding-screen" not found.');
    }

    const paymentDetails = document.getElementById('added-payments-onboarding');
    if (paymentDetails) {
        paymentDetails.addEventListener('click', function() {
        window.location.href = '../screens/store-onboard-add-socials.html'; // From adding payment details to adding social media
      });
    } else {
      console.error('Element with ID "added-payments-onboarding" not found.');
    }

    const socialsDetails = document.getElementById('added-socials-onboarding');
    if (socialsDetails) {
        socialsDetails.addEventListener('click', function() {
        window.location.href = '../screens/store-onbaord-add-delivery-option.html' ; // From adding payment details to adding social media
      });
    } else {
      console.error('Element with ID "added-socials-onboarding" not found.');
    }

    const deliveryDetails = document.getElementById('onboarding-end');
    if (deliveryDetails) {
        deliveryDetails.addEventListener('click', function() {
        window.location.href = '../screens/store-onboard-finish.html' ; // From adding delivery details to last onbioarding screen
      });
    } else {
      console.error('Element with ID "onboarding-end" not found.');
    }

    const finishOnboarding = document.getElementById('onboard-finish-last-screen');
    if (finishOnboarding) {
        finishOnboarding.addEventListener('click', function() {
        window.location.href = '../screens/home-screen.html' ; // From final onbaording screen to home screen
      });
    } else {
      console.error('Element with ID "onboard-finish-last-screen" not found.');
    }

  });


  
//code for selecting products (which industry do you belong to)
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'carousel-button'
    const carouselButtons = document.querySelectorAll('.carousel-button');
    // Array to keep track of selected buttons
    let selectedButtons = [];

    // Add click event listener to each carousel button
    carouselButtons.forEach(button => {
        button.addEventListener('click', () => {
            // If the button is already selected, unselect it
            if (button.classList.contains('selected')) {
                button.classList.remove('selected');
                // Remove the button from the selectedButtons array
                selectedButtons = selectedButtons.filter(selectedButton => selectedButton !== button);
            } else {
                // If the user has already selected 3 buttons, show a notification and do not select more
                if (selectedButtons.length >= 3) {
                    showNotification();
                    return;
                }
                // Select the button and add it to the selectedButtons array
                button.classList.add('selected');
                selectedButtons.push(button);
            }
        });
    });

    // Function to show a notification banner
    function showNotification() {
        const banner = document.getElementById('notification-banner');
        banner.style.display = 'block';
        // Hide the banner after 2.5 seconds (2 seconds display + 0.5 seconds slide up animation)
        setTimeout(() => {
            banner.style.display = 'none';
        }, 2500);
    }

    // Add click event listener to the "Continue" button
    const continueButton = document.getElementById('selected-businesses-confirm');
    continueButton.addEventListener('click', () => {
        // Get the selected options
        const selectedOptions = selectedButtons.map(button => button.querySelector('.carousel-button-label p').innerText);

        // Send the selected options to the backend
        fetch('/api/save-selected-options', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ selectedOptions })
        })
        .then(response => response.json())
        .catch(error => {
            console.error('Error:', error);
        })
        .finally(() => {
            // Navigate to the next screen regardless of the fetch result
            window.location.href = '../screens/store-onboard-add-physical-products.html';
        });
    });
});

// Upload image notification      
document.getElementById('product-image-upload').addEventListener('change', (event) => {
    if (event.target.files.length > 0) {
        const uploadBanner = document.getElementById('upload-notification-banner');
        uploadBanner.style.display = 'block';
        setTimeout(() => {
            uploadBanner.style.display = 'none';
        }, 2500);
    }
});

$(document).ready(function() {
    $('#product-image-upload').on('change', function(event) {
        const files = event.target.files;
        const previewContainer = $('#image-preview-container');
        const fileUploadText = $('#file-upload-text');
        const existingImages = previewContainer.children('img').length;

        // Do not clear previous previews

        if (files.length > 6 || existingImages + files.length > 6) {
            alert('You can only upload a maximum of 6 images.');
            return;
        }

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = function(e) {
                const img = $('<img>').attr('src', e.target.result).addClass('image-preview');
                previewContainer.append(img);
            };

            reader.readAsDataURL(file);
        }

        if (files.length > 0) {
            fileUploadText.text(`${files.length} file(s) chosen`);
            $('#upload-notification-banner').show();
            setTimeout(() => {
                $('#upload-notification-banner').hide();
            }, 2500);
        } else {
            fileUploadText.text('No files chosen');
        }
    });
});

// Updting the product type based on if a user selects digital product or physical product
document.addEventListener('DOMContentLoaded', () => {
    const productTypeSelect = document.getElementById('product-type');
    const stockQuantityLabel = document.querySelector('label[for="Stock quantity"]');
    const stockQuantityInput = document.querySelector('input[title="Stock quantity"]');

    productTypeSelect.addEventListener('change', (event) => {
        if (event.target.value === 'digital product') {
            stockQuantityLabel.textContent = 'Download link';
            stockQuantityLabel.setAttribute('for', 'Download link');
            stockQuantityInput.setAttribute('title', 'Download link');
            stockQuantityInput.setAttribute('type', 'url');
            stockQuantityInput.setAttribute('placeholder', 'https://example.com');
        } else {
            stockQuantityLabel.textContent = 'Quantity';
            stockQuantityLabel.setAttribute('for', 'Stock quantity');
            stockQuantityInput.setAttribute('title', 'Stock quantity');
            stockQuantityInput.setAttribute('type', 'number');
            stockQuantityInput.setAttribute('placeholder', 'Quantity in stock (e.g., 20)');
        }
    });
});


