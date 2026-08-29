//c) Elaborar um programa que leia um número e verifique se ele é ou não perfeito. Um número dito perfeito é aquele que é igual à soma dos seus divisores inteiros (exceto o próprio número). O programa deve exibir os divisores do número e a soma deles.

const prompt = require('prompt-sync')();
const numero = Number(prompt('Digite um número: '));
let somaDivisores = 0;
let divisores = [];

for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
        divisores.push(i);
        somaDivisores += i;
    }
}

console.log(`Divisores de ${numero}: ${divisores.join(', ')}`);
console.log(`Soma dos divisores: ${somaDivisores}`);

if (somaDivisores === numero) {
    console.log(`${numero} é um número perfeito.`);
} else {
    console.log(`${numero} não é um número perfeito.`);
}