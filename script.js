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
        .then(data => {
            // Navigate to the next screen
            window.location.href = '/next-screen';
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});