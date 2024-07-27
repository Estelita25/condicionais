let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let numero3 = parseFloat(prompt("Digite o terceiro número:"));

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    console.log("Por favor, insira apenas números válidos.");
} else {

    let menor, meio, maior;

    if (numero1 <= numero2 && numero1 <= numero3) {
        menor = numero1;
        if (numero2 <= numero3) {
            meio = numero2;
            maior = numero3;
        } else {
            meio = numero3;
            maior = numero2;
        }
    } else if (numero2 <= numero1 && numero2 <= numero3) {
        menor = numero2;
        if (numero1 <= numero3) {
            meio = numero1;
            maior = numero3;
        } else {
            meio = numero3;
            maior = numero1;
        }
    } else {
        menor = numero3;
        if (numero1 <= numero2) {
            meio = numero1;
            maior = numero2;
        } else {
            meio = numero2;
            maior = numero1;
        }
    }

    console.log(`Os números em ordem crescente são: ${menor}, ${meio}, ${maior}`);
}