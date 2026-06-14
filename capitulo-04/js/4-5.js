// Elaborar um programa que leia um número e calcule sua raiz quadrada. Caso a raiz seja exata (quadrados perfeitos), informá-la, caso contrário, informe: ‘Não há raiz exata para ..’. A Figura 4.5 ilustra uma execução desse programa.

const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const numero = parseFloat(document.querySelector('#numero').value);
    const raiz = Math.sqrt(numero);
    if (Number.isInteger(raiz)) {
        resultado.textContent = `A raiz quadrada de ${numero} é ${raiz}.`;
    } else {        resultado.textContent = `Não há raiz exata para ${numero}.`;
    }
});