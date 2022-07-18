// constantes do AluraFone
const listaDeTeclas = document.querySelectorAll('input[type=button]');
const campoTel = document.querySelector('input[type=tel]');

/* 
for para funcoes anonimas de add numero no campoTel; add e remover classe CSS
*/
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];

    tecla.onclick = function () {
        campoTel.value += tecla.value
    }

    tecla.onkeydown = function (evento) {
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}