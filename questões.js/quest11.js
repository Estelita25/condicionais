let salario = parseFloat(prompt("Digite o seu salário:"));

if (isNaN(salario) || salario <= 0) {
    console.log("Entrada inválida. Por favor, insira salário válido (número positivo).");
} else {
    let aumento, novoSalario;

    if (salario > 1500) {
        aumento = salario * 0.10; // 10% de aumento
    } else {
        aumento = salario * 0.15; // 15% de aumento
    }

    novoSalario = salario + aumento;

    console.log(`Seu aumento é de R$ ${aumento.toFixed(2)}.`);
    console.log(`Seu novo salário é de R$ ${novoSalario.toFixed(2)}.`);
}
