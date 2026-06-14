// Em um determinado momento do dia, apenas notas de 10, 50 e 100 estão disponíveis em um terminal de caixa eletrônico. Elaborar um programa que leia um valor de saque de um cliente, verifique sua validade (ou seja, se pode ser pago com as notas disponíveis) e informe o número mínimo de notas de 100, 50 e 10 necessárias para pagar esse saque. A Figura 4.6 exemplifica uma execução do programa.

const form = document.querySelector('form');
const ressultado1 = document.querySelector('#resultado1');
const ressultado2 = document.querySelector('#resultado2');
const ressultado3 = document.querySelector('#resultado3');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const saque = parseInt(form.saque.value);
    if (saque % 10 !== 0) {
        ressultado1.textContent = 'Valor inválido. Para notas disponíveis (10, 50 e 100R$).';
        ressultado2.textContent = '';
        ressultado3.textContent = '';
        return;
    }
    const notas100 = Math.floor(saque / 100);
    let resto = saque % 100;
    const notas50 = Math.floor(resto / 50);
    resto = resto % 50;
    const notas10 = Math.floor(resto / 10);
    if (notas100 > 0) {
        ressultado1.textContent = `Notas de 100R$: ${notas100}`;
    } if (notas50 > 0) {
        ressultado2.textContent = `Notas de 50R$: ${notas50}`;
    } if (notas10 > 0) {
        ressultado3.textContent = `Notas de 10R$: ${notas10}`;
    }
});

