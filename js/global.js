function showModal() {
    var btn = document.getElementById('show');
    var container = document.getElementById('modal_cadastro');

    btn.addEventListener('click', function () {
        if (container.style.display === 'none') {
            container.style.display = 'flex';
        } else {
            container.style.display = 'none';
        }
    });
}

function closeModal() {
    var button = document.getElementById('close');
    var container = document.getElementById('modal_cadastro');

    button.addEventListener('click', function () {
        if (container.style.display === 'flex') {
            container.style.display = 'none';
        } else {
            container.style.display = 'flex';
        }
    });
}


function showHide() {
    var a = document.getElementById('show');
    var b = document.getElementsByClassName('options');

    a.addEventListener('click', function () {
        if (b.style.display === 'none') {
            b.style.display = 'flex';
        } else {
            b.style.display = 'none';
        }
    });
}
