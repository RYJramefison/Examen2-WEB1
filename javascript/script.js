let positionPrecedente = window.pageYOffset;
const navbar = document.querySelector("nav");

window.addEventListener('scroll', function() {
    let positionActuelle = window.pageYOffset;
    if (positionPrecedente > positionActuelle && positionActuelle === 0) {
        navbar.classList.remove("styleNavBar");
    } else {
        navbar.classList.add("styleNavBar");
    }
    positionPrecedente = positionActuelle;
});


