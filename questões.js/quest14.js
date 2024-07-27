let nota = parseInt(prompt("Digite um número de 1 a 5:"));

if (isNaN(nota) || nota < 1 || nota > 5) {
    console.log("Número inválido. Por favor, insira um número entre 1 e 5.");
} else {
    switch (nota) {
        case 1:
            console.log("Muito insuficiente");
            break;
        case 2:
            console.log("Insuficiente");
            break;
        case 3:
            console.log("Regular");
            break;
        case 4:
            console.log("Bom");
            break;
        case 5:
            console.log("Muito bom");
            break;
        default:
            console.log("Número inválido. Por favor, insira um número entre 1 e 5.");
            break;
    }
}
