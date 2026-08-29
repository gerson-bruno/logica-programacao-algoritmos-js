// a) Elaborar um programa que leia o nome de uma fruta e um número. O programa deve repetir a exibição do nome da fruta, de acordo com o número informado. Utilize o “*” para separar os nomes. A Figura 5.15 ilustra a execução do programa.

const prompt = require('prompt-sync')();
const fruta = prompt('Digite o nome de uma fruta: ');
const numero = Number(prompt('Digite um número: '));

for (let i = 1; i <= numero; i++) {
    if (i < numero) {
        process.stdout.write(fruta + ' * ');
    } else {
        console.log(fruta);
    }
};