const chalk = require("chalk");
const fs = require('fs');


function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push({ [temp[1]]: temp[2] }) //criando chave do objeto
    }
    return arrayResultados.length === 0 ? 'Não há links' : arrayResultados;
}

function trataErro(erro){
    throw new Error(chalk.red(erro.code,'404 - arquivo nao encontrado'));
}


//async await
async function pegarArquivo(caminhoDoArquivo){
    const enconding = 'utf-8';
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding);
        console.log(extraiLinks(texto));
    }catch(erro){
        trataErro(erro);
    }
    finally{
        console.log(chalk.yellow('operação finalizada'))
    }
}




// pegarArquivo('./arquivos/texto1.md');

module.exports = pegarArquivo;

// function pegarArquivo(caminhoDoArquivo) {
//     const enconding = 'utf-8';
//     fs.promises
//     .readFile(caminhoDoArquivo, enconding) //promises é como o js lida com assincronicidade  
//     .then((texto) => chalk.green(console.log(texto))) //mmetodo callback passar uma função que vai ser chamada de volta "então"/ é passado oq esperamos 
//     .catch((erro) => trataErro(erro))
// }

// function pegarArquivo(caminhoDoArquivo) {
//     const enconding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, enconding, (erro, texto) => {
//         if (erro){
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })
// }

