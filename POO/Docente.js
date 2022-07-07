<<<<<<< HEAD
import User from "./User.js";

export default class Docente extends User{
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    aprovaEstudante(estudante, curso){
        return `estudante ${estudante} passou no curso ${curso}.`;
    }
     
    exibirInfos(){
        return `${this.nome}, ${this.email}, ${this.nascimento},${this.role}, ${this.ativo}`;
    }
}

// const novoDocente = new Docente('esther','e@e.com', '2021-01-01');
// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())
=======
import User from "./User.js";

export default class Docente extends User{
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    aprovaEstudante(estudante, curso){
        return `estudante ${estudante} passou no curso ${curso}.`;
    }
     
    exibirInfos(){
        return `${this.nome}, ${this.email}, ${this.nascimento},${this.role}, ${this.ativo}`;
    }
}

// const novoDocente = new Docente('esther','e@e.com', '2021-01-01');
// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())
>>>>>>> e8078c8b4fb42487c68a15981633718c776852f6
// console.log(novoDocente.aprovaEstudante('Juliana', 'JS'))