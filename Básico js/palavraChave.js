// const pessoa = {
//     nome: "Ana",
//     email: "a@email.com",
//     imprimeNome: function(){
//       console.log(`${pessoa.nome}`)
// //     }
// //    }

//    pessoa.imprimeNome() //Ana

const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function () {
        console.log(`${this.nome}`)
    }
}

pessoa.imprimeNome() //Ana
console.log('------------------------------------')

function imprimeNomeEmail() {
    console.log(`nome: ${this.nome}, email ${this.email}`)
}

const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: imprimeNomeEmail
}

const pessoa2 = {
    nome: "Paula",
    email: "p@email.com",
    imprimeInfo: imprimeNomeEmail
}

pessoa1.imprimeInfo()
//nome: Ana, email a@email.com
pessoa2.imprimeInfo()
//nome: Paula, email p@email.com

console.log('------------------------------------')

function imprimeNomeEmail(tipoCliente) {
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
}

const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
}

const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
}

imprimeNomeEmail.call(cliente1, "cliente especial")
// cliente especial - nome: Carlos, email: c@email.com

imprimeNomeEmail.call(cliente2, "cliente estudante")
// cliente estudante - nome: Fred, email: f@email.com

console.log('------------------------------------')

// function imprimeNomeEmail(tipoCliente, agencia){
//     console.log(`
//       ${tipoCliente} da agência ${agencia}:
//       - nome: ${this.nome}, email: ${this.email}
//       `)
//    }

//    const cliente1 = {
//     nome: "Carlos",
//     email: "c@email.com"
//    }

//    const cliente2 = {
//     nome: "Fred",
//     email: "f@email.com"
//    }

// const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
// const clienteEstudante = ["cliente estudante", "Fortaleza"]

// imprimeNomeEmail.apply(cliente1, clienteEspecial)
// // cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com

// imprimeNomeEmail.apply(cliente2, clienteEstudante)
// // cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com

// Utilize o método apply() caso você tenha um array
//  de dados e o call() para passar valores individuais como parâmetro.
//   Lembre-se que o array deve seguir a ordem correta dos parâmetros informado na função.
console.log('------------------------------------')

const personagem = {
    nome: "Princesa Leia",
    apresentar: function () {
        return `a personagem é ${this.nome}`
    }
}

const personagemGenerico = personagem.apresentar
console.log(personagemGenerico())
//a personagem é undefined

const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())
//a personagem é Princesa Leia