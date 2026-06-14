// Sabendo que o fuso horário da França em relação ao Brasil é de + 5 horas (no horário de verão na França), elaborar um programa que leia a hora no Brasil e informe a hora na França. A Figura 4.4 ilustra a tela com dados de entrada e saída do programa.

const form = document.querySelector('form');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const [hora, minuto] = document
  .getElementById("horaBrasil")
  .value
  .split(":")
  .map(Number);

let horaFranca = (hora + 5) % 24;

resultado.textContent =
  `São ${String(horaFranca).padStart(2, "0")}:${String(minuto).padStart(2, "0")} horas na França. \n Se prepare aventureiro(a)!`;
    resultado.style.display = "block";

setTimeout(() => {
    resultado.style.display = "none";
}, 10000);
});