import Operadores from "./operadores.js";

export default class Soma extends Operadores {

    constructor(numeroA, numeroB) {
        super(numeroA, numeroB);
    }

    fazSoma() {
        let resultado = this.numeroA + this.numeroB
        return `O resultado da Soma é ${resultado}`;
    }
}