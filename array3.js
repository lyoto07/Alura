let notas= [10,7,8,5,10];
let soma = 0;
let media = 0;
notas.pop()
console.log(notas)

for(var i = 0; i < notas.length;i++){
    soma+=notas[i];
    media = soma / notas.length;
}
//teste
console.log(media);

