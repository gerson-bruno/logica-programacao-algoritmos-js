// Uma farmácia necessita de um programa que leia o total de uma compra. Exiba como resposta o nº máximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcela. Considere as seguintes condições: a) cada parcela deve ser de, no mínimo, R$ 20,00; b) o número máximo de parcelas permitido é 6.

const prompt = require('prompt-sync')();
const valorCompra = Number(prompt('Digite o valor total da compra: '));
let maxParcelas = Math.floor(valorCompra / 20);
let parcelas = Math.min(Math.max(maxParcelas, 1), 6);
let valorParcela = valorCompra / parcelas;
console.log(`Pode pagar em ${parcelas} parcelas de R$ ${valorParcela.toFixed(2)}`);