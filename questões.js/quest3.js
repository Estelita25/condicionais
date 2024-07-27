let numero1 = parseInt(prompt("Digite um número:"));
let numero2 = parseInt(prompt("Digite outro número:"));

function compararNumeros(numero1, numero2) {
    if (numero1 > numero2) {
        console.log(`${numero1} é maior que ${numero2}.`);
        return "numero 1 é maior ao numero 2";
    } else if (numero2 > numero1) {
        console.log(`${numero2} é maior que ${numero1}.`);
        return "numero 2 é maior ao numero 1";
    } else {
        console.log(`${numero1} e ${numero2} são iguais.`);
        return "Os números são iguais.";
    }
}

let resultado = compararNumeros(numero1, numero2);
console.log(resultado); // Exibe o resultado retornado pela função