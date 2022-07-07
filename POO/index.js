<<<<<<< HEAD
import User from "./User.js";
import Docente from "./Admin.js";
import Admin from "./Docente.js";


const novoUser = new User('gui', 'gui@gmail.com','10/07/1998')
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('vii', 'serafim','vii@gmail.com','23/07/2000','Admin')
console.log(novoAdmin.nome);
console.log(novoAdmin.sobrenome);

//da erro pois o metodo é privado
// const novoUser = new User('gui', 'gui@gmail.com','10/007/1998','Admin')
// console.log(novoUser.#montaObjUser());

novoAdmin.nome = 'ándre';
console.log(novoAdmin.nome);

const novoDocente = new Docente('Fran', 'fl@fl.com','10/07/1978','Docente')
=======
import User from "./User.js";
import Docente from "./Admin.js";
import Admin from "./Docente.js";


const novoUser = new User('gui', 'gui@gmail.com','10/07/1998')
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('vii', 'serafim','vii@gmail.com','23/07/2000','Admin')
console.log(novoAdmin.nome);
console.log(novoAdmin.sobrenome);

//da erro pois o metodo é privado
// const novoUser = new User('gui', 'gui@gmail.com','10/007/1998','Admin')
// console.log(novoUser.#montaObjUser());

novoAdmin.nome = 'ándre';
console.log(novoAdmin.nome);

const novoDocente = new Docente('Fran', 'fl@fl.com','10/07/1978','Docente')
>>>>>>> e8078c8b4fb42487c68a15981633718c776852f6
console.log(novoDocente.exibirInfos());