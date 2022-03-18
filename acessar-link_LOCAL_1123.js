const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345678987",
    email:"andre@email.com"
}

const chaves = ["nome","idade","cpf","email"]

chaves.forEach(info =>console.log(cliente[info]))

console.log(cliente["conta"])