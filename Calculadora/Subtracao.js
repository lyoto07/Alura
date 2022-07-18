import Operadores from "./operadores.js";

export default class Subtracao extends Operadores {

    constructor(numeroA, numeroB) {
        super(numeroA, numeroB);
    }

    fazSubtracao() {
        let resultado = this.numeroA - this.numeroB
        return `O resultado da subtração é ${resultado}`;
    }
}