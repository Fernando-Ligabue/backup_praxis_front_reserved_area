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

// modal insert new document pagina utentes/profissionais
var modal_doc = document.getElementById("modal_documents");
var button_doc = document.getElementById("showDoc");
var span_doc = document.getElementsByClassName("closeDoc")[0];

button_doc.onclick = function () {
    modal_doc.style.display = "flex";
}

span_doc.onclick = function () {
    modal_doc.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal_doc) {
        modal_doc.style.display = "none";
    }
}


// toggle card options utentes
// var div = document.getElementById("options");
// var button_opt = document.getElementById("toggle_btn");

// button_opt.onclick = function () {
//     if (div.style.display == "none") {
//         div.style.display = "flex";
//     } else {
//         div.style.display = "none"
//     }
// }

// testes
// const div = document.querySelector(".options");
// const btn = document.querySelectorAll('.toggle_btn');

// btn.forEach((toggle_btn) =>
//   toggle_btn.addEventListener('click', (div) => { 
//     //   div.style.display == "none" ? div.style.display = "flex" : div.style.display = "none";
//     // console.log(div.currentTarget)
// })
// );

// Upload docs area
