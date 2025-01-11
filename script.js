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
    const continueButton = document.getElementById('selected-businesses');
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
            window.location.href = 'screens/store-onboard-add-physical-products.html';
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
        previewContainer.empty(); // Clear previous previews

        if (files.length > 5) {
            alert('You can only upload a maximum of 5 images.');
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