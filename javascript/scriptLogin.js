const boutton = document.getElementById("loginBoutton");
boutton.addEventListener("click", function() {
    let email = document.querySelector(".inputEmail").value;
    let password = document.querySelector(".inputPassword").value;

    if (email === "test@gmail.com" && password === "motdepasse") {
        document.getElementById("loginBoutton").style.display = "none";
        document.getElementById("iconBoutton").style.display = "block";
        setTimeout(function() {
            window.location.href = "./html/contain.html";
        }, 3000);

    } else {
        alert("erreur")
}
});