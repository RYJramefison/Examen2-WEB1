


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
const clickToLogin = document.querySelector(".sign button");
clickToLogin.addEventListener("click",function(){
    setTimeout(function() {
        window.location.href = "../index.html";
    }, 1000);
})


document.addEventListener("DOMContentLoaded", function() {
    const liensScrollDoux = document.querySelectorAll('.navigation a');

    liensScrollDoux.forEach(lien => {
        lien.addEventListener('click', function(e) {
            e.preventDefault();
            const cible = this.getAttribute('href');
            document.querySelector(cible).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


const askSend = document.querySelector(".askSend");
const bouttonSend = document.querySelector(".send");
const containInputSend = document.querySelector(".inputSend");
bouttonSend.addEventListener('click', function(){
    if(containInputSend.value.length == 0){
        alert('please file out this field')
    }
        else {
            askSend.style.display = "block";
            setTimeout(function() {
                askSend.style.display = "none";
            }, 2000)
        }
});

// const bouttonReservation = document.querySelector(".buttonReservation button");
// const location = document.querySelector("location");
// const checkIn = document.querySelector(".checkIn");
// const checkOut = document.querySelector(".checkOut");
// const envelopel = document.querySelector(".envelope");

// bouttonReservation.addEventListener('click',function(){
// });

// document.addEventListener('DOMContentLoaded', function(){
//     let compteurElement = document.querySelector('.compteur');
//     let compteur = 0;
//     function incrementerCompteur(){
//         compteur++;
//         if(compteur <= 99){
//             compteurElement.textContent = compteur + "%";
//             setTimeout(incrementerCompteur,60);
//         }
//     }
//     incrementerCompteur();
// })


window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const positionDefilement = window.scrollY;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (positionDefilement > sectionTop - window.innerHeight / 2) {
            section.style.transition = 'opacity 1s, transform 1s';
            section.style.opacity = 1;
            section.style.transform = 'scale(1)';
        }
        else {
            section.style.transition = 'opacity 1s, transform 1s';
            section.style.opacity = 0;
            section.style.transform = 'scale(0.5)';
        }
    });
});



