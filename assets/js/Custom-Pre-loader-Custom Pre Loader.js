// Wait for the page to load
window.onload = function() {
    // Get the preloader wrapper element
    var preloaderWrapper = document.querySelector('.preloader-wrapper');

    // Set a timeout to hide the preloader after 1 second
    setTimeout(function() {
        preloaderWrapper.classList.add('hide-preloader');
    }, 1500); // 1000 milliseconds = 1 second
};