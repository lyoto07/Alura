<<<<<<< HEAD
const salaJS = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7,3.5,8,9.5];

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador,atual)=>
    acumulador+atual,0)
    return somaDasNotas/notasDaSala.length;
}

console.log('media da sala de JS: '+ mediaSala(salaJS))
console.log('media da sala de Java: '+ mediaSala(salaJava))
console.log('media da sala de Python: '+ mediaSala(salaPython))


const notas = [10,6.5,8,7];
const media = notas.reduce((acumulador, atual)=> atual+acumulador,0 ) / notas.length;

console.log(media)

=======
const salaJS = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7,3.5,8,9.5];

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador,atual)=>
    acumulador+atual,0)
    return somaDasNotas/notasDaSala.length;
}

console.log('media da sala de JS: '+ mediaSala(salaJS))
console.log('media da sala de Java: '+ mediaSala(salaJava))
console.log('media da sala de Python: '+ mediaSala(salaPython))


const notas = [10,6.5,8,7];
const media = notas.reduce((acumulador, atual)=> atual+acumulador,0 ) / notas.length;

console.log(media)

>>>>>>> a5886aee4cdf3243de32869e414ae1db0e084ccf
