const frm = document.querySelector("form");
const resp = document.querySelector("#outResp");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);

    if (numero < 2) {
        resp.textContent = "O número deve ser maior ou igual a 2.";
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        resp.textContent = `${numero} é um número primo.`;
    } else {
        resp.textContent = `${numero} não é um número primo.`;
    }

    frm.inNumero.value = "";
    frm.inNumero.focus();
});