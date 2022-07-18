export default class Operadores {
    #numeroB
    #numeroA

    constructor(numeroA, numeroB) {
        this.#numeroA = numeroA;
        this.#numeroB = numeroB;
    }

    get numeroA() {
        return this.#numeroA;
    }

    get numeroB() {
        return this.#numeroB;
    }

    set numeroA(novoNumeroA) {
       return this.#numeroA = novoNumeroA;
    }
    set numeroB(novoNumeroB) {
        return this.#numeroB = novoNumeroB;
    }

    exibirInfos(){
        return `A:${this.numeroA}  B:${this.numeroB}`
    }
}