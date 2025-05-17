// Get the button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show the button when the user scrolls down 200px
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
};

// Scroll to the top of the page when the button is clicked
scrollToTopBtn.addEventListener('click', function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});