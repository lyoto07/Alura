function troca(lista, analise) {
    //item de menor valor
    let itemAnalise = analise[analise];
    //item com valor maior
    let itemAnterior = analise[analise - 1];

    lista[analise] = itemAnterior;

    lista[analise - 1] = itemAnalise;
}

module.exports = troca;