let previousScrollPosition = window.pageYOffset;
const navbar = document.querySelector("nav");

window.addEventListener('DOMContentLoaded', (event) => {
    if (window.pageYOffset === 0) {
        navbar.classList.add("styleNavBar");
    }
});

window.onscroll = function() {
    let currentScrollPosition = window.pageYOffset;
    if (previousScrollPosition > currentScrollPosition && currentScrollPosition === 0) {
        navbar.classList.add("styleNavBar");
    } else {
        navbar.classList.remove("styleNavBar");
    }
    previousScrollPosition = currentScrollPosition;
};
