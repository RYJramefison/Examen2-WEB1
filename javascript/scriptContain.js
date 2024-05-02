


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

document.addEventListener('DOMContentLoaded', function(){
    let nombrePourcentage = document.querySelector('.nombrePourcentage');
    const aboutSection = document.getElementById("About");
    let UneIncrementation = false;

    window.addEventListener('scroll', function() {
        const positionDefilement = window.scrollY;
        const sectionTop = aboutSection.offsetTop;
        
        if (positionDefilement > sectionTop - window.innerHeight / 2 && !UneIncrementation) {
            UneIncrementation = true;
            
            let entier = 0;
            function nombreIncrementer(){
                entier++;
                if(entier <= 99){
                    nombrePourcentage.textContent = entier + "%";
                    setTimeout(nombreIncrementer,70);
                }
            }
            nombreIncrementer();
        }
    });
});


document.addEventListener('DOMContentLoaded', function(){
    const nombresAIncrementer = document.querySelectorAll('.nombre');
    const aboutSection = document.getElementById("About");
    let UneIncrementation = false;

    window.addEventListener('scroll', function() {
        const positionDefilement = window.scrollY;
        const sectionTop = aboutSection.offsetTop;
        
        if (positionDefilement > sectionTop - window.innerHeight / 2 && !UneIncrementation) {
            UneIncrementation = true;
            nombresAIncrementer.forEach(nombre => {
                let entier = 0;
                let valeurCible = Number(nombre.innerText);
                
                function incrementerCompteur(){
                    entier++;
                    if(entier <= valeurCible){
                        nombre.textContent = entier;
                        if(valeurCible === 50){
                            setTimeout(incrementerCompteur, 150);
                        } else {
                            setTimeout(incrementerCompteur, 30);
                        }
                    }
                }
                incrementerCompteur();
            });
        }
    });
});


window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight - windowHeight;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollPosition > sectionTop - windowHeight / 2) {
            section.style.transition = 'opacity 1s, transform 1s';
            section.style.opacity = 1;
            section.style.transform = 'scale(1)';
        } else {
            section.style.transition = 'opacity 1s, transform 1s';
            section.style.opacity = 0;
            section.style.transform = 'scale(0.5)';
        }
    });
    if (scrollPosition >= totalHeight) {
        window.removeEventListener('scroll', arguments.callee);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const reservationButton = document.querySelector('.buttonReservation button');
    const reservationSuccess = document.querySelector(".buttonReservation h5");
    const reservationFailed = document.querySelector(".manquant");
    reservationButton.addEventListener('click', function() {
        const inputs = document.querySelectorAll('.makeReservationForm input');
        let allFilled = true;
        inputs.forEach(input => {
            if (!input.value) {
                allFilled = false;
                return;
            }
        });
        if (allFilled) {
            reservationSuccess.style.display = "block";
            setTimeout(function() {
                reservationSuccess.style.display = "none";
            }, 2000)
        } else {
            reservationFailed.style.display = "block";
            setTimeout(function() {
                reservationFailed.style.display = "none";
            }, 2000)
        }
    });
});

