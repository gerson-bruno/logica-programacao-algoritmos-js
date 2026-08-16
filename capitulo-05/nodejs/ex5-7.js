// a) A Copa do Mundo ocorre de 4 em 4 anos, desde 1930, exceto nos anos de 1942 e 1946 (Segunda Guerra mundial). Construir um programa que repita a leitura de números (anos) até ser digitado 0. Informe para cada ano se ele é ou não ano de Copa do Mundo.

const prompt = require('prompt-sync')();
console.log('Programa Anos de Copa do Mundo. Digite 0 para sair.');
console.log('-------------------------------');
do {
    const ano = Number(prompt('Digite um ano: '));
    if (ano === 0) {
        console.log('Saindo do programa...');
        break;
    } else if (ano === 1942 || ano === 1946) {
        console.log(`${ano} não é ano de Copa do Mundo (Segunda Guerra Mundial).`);
    } else if (ano >= 1930 && (ano - 1930) % 4 === 0) {
        console.log(`${ano} é ano de Copa do Mundo.`);
    } else {
        console.log(`${ano} não é ano de Copa do Mundo.`);
    }
} while (true);