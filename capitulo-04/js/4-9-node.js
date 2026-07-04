// Elaborar um programa que leia um número – que deve ser uma centena. Calcule e exiba a centena invertida. Caso o número não seja uma centena, exiba mensagem.

const prompt = require('prompt-sync')();
const numero = Number(prompt('Digite um número de 100 a 999: '));
if (numero < 100 || numero > 999) {
    console.log('O número digitado não é uma centena.');
    return;
}

const centena = Math.floor(numero / 100);
const dezena = Math.floor((numero % 100) / 10);
const unidade = numero % 10;
const centenaInvertida = unidade * 100 + dezena * 10 + centena;
console.log(`A centena invertida de ${numero} é ${centenaInvertida}.`);