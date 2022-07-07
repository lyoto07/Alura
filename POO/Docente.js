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
// console.log(novoDocente.aprovaEstudante('Juliana', 'JS'))