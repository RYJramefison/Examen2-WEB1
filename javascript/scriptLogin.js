const boutton = document.querySelector(".loginBoutton");

boutton.addEventListener("click", function() {
    let email = document.querySelector(".inputEmail").value;
    let password = document.querySelector(".inputPassword").value;

    if (email === "test@gmail.com" && password === "motdepasse") {

        boutton.innerText = ".......";
        boutton.classList.add("addchangement")
        setTimeout(function() {
            window.location.href = "./html/contain.html";
        }, 3000);
    } else {
        boutton.innerText = ".......";
        boutton.classList.add("addchangement")
        setTimeout(function() {
            boutton.innerText = "Login Now";
            boutton.classList.remove("addchangement")
            document.querySelector(".erreur").style.display = "block";
            setTimeout(function() {
                document.querySelector(".erreur").style.display = "none";
            }, 2000);
        }, 3000);
}
});