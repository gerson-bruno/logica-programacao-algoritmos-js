// Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração (em gramas).

const prompt = require('prompt-sync')();
const pesoRacao = Number(prompt('Peso da ração (kg): ')) * 1000; // Convertendo para gramas
const consumoDiario = Number(prompt('Consumo diário do gato (g): ')); 
const diasDuracao = Math.floor(pesoRacao / consumoDiario); //arredondando para baixo, pois não pode durar um dia inteiro se faltar ração para o consumo diário
const sobraRacao = pesoRacao % consumoDiario; // pegando o resto da divisão
console.log(`A ração irá durar ${diasDuracao} dias.`);
console.log(`Sobra da ração: ${sobraRacao} gramas.`); 