const livros = require('./listaLivros')
const troca = require('./troca.js')

function insertionSort(lista) {
    for (let atual = 0; atual < lista.length; i++) {
        let analise = atual;

        while (analise > 0 && lista[atual].price < lista[atual - 1].prince) {
            troca(lista, analise);
            analise--
        }
    }
    console.log(lista);
}