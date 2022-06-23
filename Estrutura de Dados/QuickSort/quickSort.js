const listaLivros = require('./array');
const trocaLugar = require('./pivo/encontraMenores');

function quickSort(array, esquerda, direita) {
    if (array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
        if (esquerda < indiceAtual - 1) {
            quickSort(array, esquerda, indiceAtual);
        }
        if (indiceAtual < direita) {
            quickSort(array, indiceAtual, direita);
        }
    }

    return array;
}

function particiona(array, esquerda, direita) {
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    let atualesquerda = esquerda; //0
    let atualDireita = direita; //10

    while (atualesquerda <= atualDireita) {
        while (array[atualesquerda].preco < pivo.preco) {
            atualesquerda++;
        }
        while (array[atualDireita].ppreco > pivo.preco) {
            atualDireita--;
        }

        if (atualesquerda <= atualDireita) {
            trocaLugar(array, atualesquerda, atualDireita);
            atualesquerda++;
            atualDireita--;
        }
    }
    return atualesquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1))