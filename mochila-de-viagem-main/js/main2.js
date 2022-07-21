const form = document.getElementById('novoItem');
const lista = document.querySelector('#lista')

console.log(lista)
form.addEventListener('submit', (evento)=>{
    evento.preventDefault();

    // console.log(evento)

    // console.log(evento.target[0].value);
    // console.log(evento.target[1].value);

    // console.log(evento.target.elements['nome'].value);
    // console.log(evento.target.elements['quantidade'].value);

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);

  
})

function criaElemento(nome, quantidade){
    
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);

}