let idade = parseInt(prompt("Digite a sua idade:"));

if (isNaN(idade) || idade < 0) {
    console.log("Entrada inválida. Por favor, insira uma idade válida (número positivo).");
} else {
    if (idade >= 0 && idade <= 1) {
        console.log("Você é um bebê.");
    } else if (idade >= 2 && idade <= 12) {
        console.log("Você é uma criança.");
    } else if (idade >= 13 && idade <= 18) {
        console.log("Você é um adolescente.");
    } else {
        console.log("Você é um adulto.");
    }
}
