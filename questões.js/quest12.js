let numero = parseInt(prompt("Digite um número inteiro:"));

if (isNaN(numero)) {
    console.log("Entrada inválida. Por favor, insira um número inteiro.");
} else {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log(`O número ${numero} é divisível por 3 e por 5 ao mesmo tempo.`);
    } else {
        console.log(`O número ${numero} NÃO é divisível por 3 e por 5 ao mesmo tempo.`);
    }
}