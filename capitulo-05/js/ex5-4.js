/* alert("Digite 0 para sair do programa.");
do {
    const num = Number(prompt("Digite um número:"));
    if (num == 0 || isNaN(num)) {
        const sair = confirm("Deseja realmente sair do programa?");
        if (sair) {
            break;
        } else {
            continue;
        }
} 
if (num % 2 == 0) {
    alert(`O dobro de ${num} é ${num * 2}`);
} else {
    alert(`O triplo de ${num} é ${num * 3}`);
}
} while (true);
alert("Programa encerrado."); */

alert("Você sabia que é a melhor esposa do mundo?");
do {
    const afirmacao = prompt("Digite Sim ou Não: ");
    if (afirmacao.toLowerCase() === "sim") {
        alert("Muito bem cheirosa, te amo!");
        break;
    } else if (afirmacao.toLowerCase() === "não" || afirmacao.toLowerCase() === "nao") {
        alert("Resposta inválida! Tente de novo!");
    }
} while (true);
alert("Só pra não esquecer: Te AMOOOOOOOOOOOOOOOOO!");