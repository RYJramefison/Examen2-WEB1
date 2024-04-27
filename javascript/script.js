let positionPrecedente = window.scrollY;
const navbar = document.querySelector("nav");

window.addEventListener('scroll', function() {
    let positionActuelle = window.scrollY;
    if (positionPrecedente > positionActuelle && positionActuelle === 0) {
        navbar.classList.remove("styleNavBar");
    } else {
        navbar.classList.add("styleNavBar");
    }
    positionPrecedente = positionActuelle;
});
