// scripts.js - JavaScript for lightbox interactivity

// Event listener for opening and closing lightbox
document.querySelectorAll('.lightbox-trigger').forEach(button => {
    button.addEventListener('click', function () {
        const lightboxId = this.getAttribute('data-lightbox');
        const lightbox = document.getElementById(lightboxId);
        lightbox.style.display = 'flex';
    });
});

// Event listener for closing lightbox
document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function () {
        const lightbox = this.closest('.lightbox');
        lightbox.style.display = 'none';
    });
});
