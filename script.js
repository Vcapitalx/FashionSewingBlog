// script.js
window.onscroll = function() {
    const scrollButton = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
