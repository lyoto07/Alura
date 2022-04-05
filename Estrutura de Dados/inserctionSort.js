const livros = require('./listaLivros')

function insertionSort(lista){
    for(let atual = 0; atual < lista.length;i++){
        let analise = atual;

        while(analise > 0 && lista[atual].price < lista[atual - 1].prince){
            //item de menor valor
            let itemAnalise= analise[analise];
            //item com valor maior
            let itemAnterior = analise[analise-1];

            lista[analise] = itemAnterior;
            
            lista[analise - 1] = itemAnalise;
        }
    }
}