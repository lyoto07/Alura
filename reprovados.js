const nomes = ['Ana','Marcos','Maria','Mauro'];
const notas = [7,4.5,8,3.5];

const reprovados = nomes.filter((nota,indice) => notas[indice]<5)

console.log('Reprovados: ' + reprovados)