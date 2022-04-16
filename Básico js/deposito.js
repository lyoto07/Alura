<<<<<<< HEAD
const cliente = {
    nome:'André',
    idade:36,
    cpf:"1268376247862",
    email:"andre@email.com",
    fones: ["5591234567", "55912345678"],
    dependentes: [{
            nome: 'sara Silva',
            parentesco: "filha",
            dataNasc:"20/07/2019"
        },
        {
            nome:"Samia Maria",
            parentesco:"Filha",
            dataNAsc:"04/01/2014"
        }
    ],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }    
}
 console.log(cliente.saldo)
 cliente.depositar(30)
=======
const cliente = {
    nome:'André',
    idade:36,
    cpf:"1268376247862",
    email:"andre@email.com",
    fones: ["5591234567", "55912345678"],
    dependentes: [{
            nome: 'sara Silva',
            parentesco: "filha",
            dataNasc:"20/07/2019"
        },
        {
            nome:"Samia Maria",
            parentesco:"Filha",
            dataNAsc:"04/01/2014"
        }
    ],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }    
}
 console.log(cliente.saldo)
 cliente.depositar(30)
>>>>>>> a5886aee4cdf3243de32869e414ae1db0e084ccf
 console.log(cliente.saldo)