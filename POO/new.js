// função construtora
// function User(nome, email) {
//     this.nome = nome;
//     this.email = email;

//     this.exibirInfo = function () {
//         return `${this.nome}, ${this.email}`;
//     };
// }

// // const novoUser = new User ('Guilherme', 'gui@gmail.com');
// // console.log(novoUser.exibirInfo());

// function Admin(role) {
//     User.call(this, 'Guilherme', 'gui@gmail.com')
//     this.role = role || 'estudante';
// }

// Admin.prototype = Object.create(User.prototype);
// const novoUser = new Admin('admin');
// console.log(novoUser.exibirInfo());
// console.log(novoUser.role);

const user = {
    //inicia a função construtora
    init: function(nome, email){
        this.nome = nome;
        this.email = email;
    },

    exibirInfo: function(){
        return this.nome;
    }
}

const novoUser= Object.create(user);
novoUser.init('Guilherme','gui@gmail.com');
console.log(novoUser.exibirInfo()); 