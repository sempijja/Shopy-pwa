document.addEventListener('DOMContentLoaded', () => {
    const carouselButtons = document.querySelectorAll('.carousel-button');
    let selectedButton = null;

    carouselButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (selectedButton && selectedButton !== button) {
                showNotification();
                return;
            }

            if (button.classList.contains('selected')) {
                button.classList.remove('selected');
                selectedButton = null;
            } else {
                button.classList.add('selected');
                selectedButton = button;
            }
        });
    });

    function showNotification() {
        const banner = document.getElementById('notification-banner');
        banner.style.display = 'block';
        setTimeout(() => {
            banner.style.display = 'none';
        }, 2500); // 2 seconds + 0.5 seconds for slide up animation
    }
});