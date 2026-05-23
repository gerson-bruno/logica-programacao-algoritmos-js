// Elaborar um programa para uma empresa que leia o salário e o tempo que um funcionário trabalha na empresa. Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um acréscimo de 1% no salário, calcule e informe o número de quadriênios a que o funcionário tem direito e o salário final.

prompt = require('prompt-sync')();
const salario = Number(prompt('Salário R$: '));
const tempo = Number(prompt('Tempo de serviço (anos): '));
const quadriênios = Math.floor(tempo / 4);
const salarioFinal = salario * (1 + (quadriênios * 0.01));
console.log(`Número de quadriênios: ${quadriênios}`);
console.log(`Salário final: R$ ${salarioFinal.toFixed(2)}`);