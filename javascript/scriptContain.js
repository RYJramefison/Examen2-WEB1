


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



const fermer = document.querySelector(".fa-times-circle");
const ouvrir = document.querySelector(".bars");
const navigation = document.querySelector(".navigation");
ouvrir.addEventListener('click',function(){
    navigation.classList.toggle("showNavigation");
})
fermer.addEventListener('click',function(){
    navigation.classList.remove("showNavigation");
    
});










