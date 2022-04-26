// function decrementar(valor) {
//   console.log(valor);

//   let proximoNumero = valor - 1;
//   if (valor > 0) {
//     decrementar(proximoNumero);
//   }

// }


// console.log(decrementar(3));


// function dorme(milissegundos){
//   return new Promise(resolve => setTimeout(resolve, milissegundos));
// }
// async function incrementaNumero(numero){
//   console.log(numero)
//   await dorme(2000)
//   return incrementaNumero(numero + 1)
// }

// incrementaNumero(1)


// function dorme(milissegundos) {
//   return new Promise(resolve => setTimeout(resolve, milissegundos));
// }
// async function incrementaNumero(numero) {
//   console.log(numero)
//   await dorme(2000)

//   if (numero === 10) {
//     return 'finalizou'
//   }
//   return incrementaNumero(numero + 1)
// }

// incrementaNumero(1)

function ola(){
  function mundo() {
      console.trace('Ola Mundo');
    }
mundo();
}

ola();