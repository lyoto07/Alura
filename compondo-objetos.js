const cliente = {
    nome:"André",
    idade:36,
    cpf:"1268376247862",
    email:"andre@email.com",
    fones: ["5591234567", "55912345678"]
}

cliente.dependentes = {
    nome: "sara",
    parentesco: "filha",
    dataNasc:"20/07/2019"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)
