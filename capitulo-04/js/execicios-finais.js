//a) Elaborar um programa que leia um número. Informe se ele é par ou ímpar. Faça com o if... else... tradicional e, após, tente criar a condição com o operador ternário. 
const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Digite um número: "));
// Usando if...else...
if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}
// Usando operador ternário
let resultado = (numero % 2 === 0) ? "O número é par." : "O número é ímpar.";
console.log(resultado);


// b) Elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. Se a velocidade for inferior ou igual à permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a permitida, exiba “Multa Leve”. E, se a velocidade for superior a 20% da velocidade permitida, exiba “Multa Grave”
let velocidadePermitida = parseFloat(prompt("Digite a velocidade permitida (km/h): "));
let velocidadeCondutor = parseFloat(prompt("Digite a velocidade do condutor (km/h): "));
if (velocidadeCondutor <= velocidadePermitida) {
    console.log("Sem Multa");
} else if (velocidadeCondutor <= velocidadePermitida * 1.2) {
    console.log("Multa Leve");
} else {
    console.log("Multa Grave");
}


// c) Elaborar um programa para simular um parquímetro, o qual leia o valor de moedas depositado em um terminal de estacionamento rotativo. O programa deve informar o tempo de permanência do veículo no local e o troco (se existir). Se o valor for inferior ao tempo mínimo, exiba a mensagem: “Valor Insuficiente”. Considerar os valores/tempos da Tabela 4.6 (o máximo é 120 min).
// Tabela 4.6 - Valores do Parquímetro
// Valor (R$) | Tempo (min)
// 1,00       | 30
// 1,75       | 60
// 3,00       | 120

let valorDepositado = parseFloat(prompt("Digite o valor depositado (R$): "));
let tempoPermanencia;
let troco;
if (valorDepositado < 1.00) {
    console.log("Valor Insuficiente");
} else if (valorDepositado >= 1.00 && valorDepositado < 1.75) {
    tempoPermanencia = 30;
    troco = valorDepositado - 1.00;
    console.log(`Tempo de permanência: ${tempoPermanencia} minutos. Troco: R$ ${troco.toFixed(2)}`);
} else if (valorDepositado >= 1.75 && valorDepositado < 3.00) {
    tempoPermanencia = 60;
    troco = valorDepositado - 1.75;
    console.log(`Tempo de permanência: ${tempoPermanencia} minutos. Troco: R$ ${troco.toFixed(2)}`);
} else {
    tempoPermanencia = 120;
    troco = valorDepositado - 3.00;
    console.log(`Tempo de permanência: ${tempoPermanencia} minutos. Troco: R$ ${troco.toFixed(2)}`);
}
