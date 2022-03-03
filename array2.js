const notas = [10,6,8];
var soma = 0;
let media = 0;
notas.push(7)
console.log(notas)

for(var i = 0;i < notas.length;i++){
    soma+=notas[i];
    media=soma/notas.length;
}

media=soma / notas.length; 
console.log("a media é " + media);

 

//  for(var i = 0; i < notas.length;i++){
//     soma+=notas[i];
//     media = soma / notas.length;
// }

// console.log(media);
