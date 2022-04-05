// function modal insert new utente/profissionais
var modal = document.getElementById("modal_cadastro");
var button = document.getElementById("show");
var span = document.getElementsByClassName("close")[0];

button.onclick = function () {
    modal.style.display = "flex";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// toggle card options profissionais
var div_pro = document.getElementById("pro_opt");
var btn_pro = document.getElementById("toggle_pro");

btn_pro.onclick = function () {
    if (div_pro.style.display == "none") {
        div_pro.style.display = "flex";
    } else {
        div_pro.style.display = "none"
    }
}

