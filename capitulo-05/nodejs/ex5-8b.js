// b) Digamos que o número de chinchilas de uma fazenda triplica a cada ano, após o primeiro ano. Elaborar um programa que leia o número inicial de chinchilas e anos e informe ano a ano o número médio previsto de chinchilas da fazenda. O número inicial de chinchilas deve ser maior ou igual a 2 (um casal).

const prompt = require('prompt-sync')();
let chinchilas = Number(prompt('Digite o número inicial de chinchilas (mínimo 2): '));

while (chinchilas < 2) {
    console.log('O número inicial de chinchilas deve ser maior ou igual a 2.');
    chinchilas = Number(prompt('Digite o número inicial de chinchilas (mínimo 2): '));
}

const anos = Number(prompt('Digite o número de anos: '));

for (let i = 1; i <= anos; i++) {
    chinchilas *= 3;
    console.log(`Ano ${i}: ${chinchilas} chinchilas`);
};