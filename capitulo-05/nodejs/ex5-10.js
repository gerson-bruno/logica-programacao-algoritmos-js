// c) Elaborar um programa para uma loja que leia o valor de uma conta e o número de vezes que um cliente deseja parcelar esse valor (em boletos ou carnê). Para facilitar o troco, o lojista deseja que as parcelas iniciais não tenham centavos, ou seja, centavos apenas na última parcela. Informe como resposta o valor de cada parcela, considerando essa situação.

const prompt = require('prompt-sync')();
const valor = Number(prompt('Digite o valor da conta: '));
const num = Number(prompt('Digite o número de parcelas: '));
const parcela = Math.floor(valor / num);
const ultimaParcela = valor - (parcela * (num - 1));

for (let i = 1; i <= num - 1; i++) {
    console.log(`Parcela ${i}: R$ ${parcela.toFixed(2)}`);
}

console.log(`Última parcela: R$ ${ultimaParcela.toFixed(2)}`);