<<<<<<< HEAD
import User from "./User.js";

export default class Admin extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome,email,nascimento,role,ativo)
    }

    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`;
    }
}

// const novoAdmin = new Admin('Victor', 'v@v.com', '2021-01-01');
=======
import User from "./User.js";

export default class Admin extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome,email,nascimento,role,ativo)
    }

    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`;
    }
}

// const novoAdmin = new Admin('Victor', 'v@v.com', '2021-01-01');
>>>>>>> e8078c8b4fb42487c68a15981633718c776852f6
// console.log(novoAdmin.criarCurso('js', 20))