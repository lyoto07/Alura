class Cliente {
    constructor(nome, cpf, email, saldo) {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}


const andre = new Cliente("andre", "21351351321","andre@email.com",100)

andre.exibirSaldo()
andre.depositar(1000)
andre.exibirSaldo()
console.log(andre)