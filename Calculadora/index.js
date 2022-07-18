import Operadores from "./operadores.js";
import Divisao from "./Divisao.js";
import Subtracao from "./subtracao.js";
import Soma from "./Soma.js";

const novoOperadores = new Operadores(2,2)
console.log(novoOperadores.exibirInfos());

const novaDivisao = new Divisao(novoOperadores.numeroA, novoOperadores.numeroB);
console.log(novaDivisao.fazDivisao());

const novaSubtracao = new Subtracao(novoOperadores.numeroA, novoOperadores.numeroB);
console.log(novaSubtracao.fazSubtracao());

const novaSoma = new Soma(novoOperadores.numeroA, novoOperadores.numeroB);
console.log(novaSoma.fazSoma());