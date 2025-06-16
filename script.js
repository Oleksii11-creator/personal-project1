document.addEventListener('DOMContentLoaded', function() {
    const loginModal = document.getElementById('loginModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const openLoginModalBtn = document.getElementById('openLoginModal');
    const openLoginModalHeroBtn = document.getElementById('openLoginModalHero'); // Get the hero button
    const closeLoginModalBtn = document.getElementById('closeLoginModal');

    function openModal() {
        loginModal.classList.add('active');
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling background
    }

    function closeModal() {
        loginModal.classList.remove('active');
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Allow scrolling background
    }

    // Event listeners to open the modal
    if (openLoginModalBtn) {
        openLoginModalBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            openModal();
        });
    }

    if (openLoginModalHeroBtn) {
        openLoginModalHeroBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            openModal();
        });
    }

    // Event listener to close the modal
    if (closeLoginModalBtn) {
        closeLoginModalBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside (on the overlay)
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Close modal when pressing the Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && loginModal.classList.contains('active')) {
            closeModal();
        }
    });

    // You can add form submission logic here later if needed
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            // Here you would typically send an AJAX request to your server for login
            alert('Form submitted! (This is a placeholder action)');
            closeModal(); // Close modal after submission (for demonstration)
        });
    }
});