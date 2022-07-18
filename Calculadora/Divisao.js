import Operadores from "./operadores.js";

export default class Divisao extends Operadores {

    constructor(numeroA, numeroB) {
        super(numeroA, numeroB);
    }

    fazDivisao() {
        if(this.numeroA == 0 || this.numeroB == 0){
            return `Não é possivel dividir por 0`
        }
        let resultado = this.numeroA / this.numeroB
        return `O resultado da divisão é ${resultado}`;
    }
}