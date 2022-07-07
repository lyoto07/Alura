<<<<<<< HEAD
const user= {
    nome: 'Guilherme',
    email:'gui@gmail.com',
    nascimento:'10/07/1998',
    role: 'estudante',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: 'Victor',
    email: 'v@v.com',
    role:'admin',
    criarCurso(){
        console.log('curso criado');
    }
}

Object.setPrototypeOf(admin, user); //quem vai herda e de quem 
admin.criarCurso();
admin.exibirInfos();
 
=======
const user= {
    nome: 'Guilherme',
    email:'gui@gmail.com',
    nascimento:'10/07/1998',
    role: 'estudante',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: 'Victor',
    email: 'v@v.com',
    role:'admin',
    criarCurso(){
        console.log('curso criado');
    }
}

Object.setPrototypeOf(admin, user); //quem vai herda e de quem 
admin.criarCurso();
admin.exibirInfos();
 
>>>>>>> e8078c8b4fb42487c68a15981633718c776852f6
