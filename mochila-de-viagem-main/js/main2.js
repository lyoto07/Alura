const form = document.getElementById('novoItem');
const lista = document.querySelector('#lista');

const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach((element) => {
    console.log(element)
    criaElemento(element);
});

form.addEventListener('submit', (evento) => {
    //interrompe o comportamento padrão para que o item fique salvo na pagina
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    //objeto
    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    //passa como parametro o valor de cada atributo
    criaElemento(itemAtual);

    itens.push(itemAtual);

    //transforma em string
    localStorage.setItem('itens', JSON.stringify(itens));

    //limpa o imput
    nome.value = '';
    quantidade.value = '';

})

function criaElemento(item) {
    //criando uma tag <li> no html e adicionando uma classe item
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    //criando uma tag <strong> no html e passa a quantidade no html
    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;

    //insere o elemento filho no elemento pai e insere o nome no html
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem);

    // //objeto
    // const itemAtual = {
    //     'nome':nome,
    //     'quantidade':quantidade
    // }

    // itens.push(itemAtual);
    //                                 //transforma em string
    // localStorage.setItem('itens',JSON.stringify(itens));
}