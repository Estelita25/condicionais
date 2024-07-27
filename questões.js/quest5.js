let nota1 = obterNota("Digite primeira nota:");
let nota2 = obterNota("Digite segunda nota:");
let nota3 = obterNota("Digite terceira nota:");

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log(`Média: ${media.toFixed(2)} - Parabéns!!! Você foi aprovado.`);
} else {
    console.log(`Média: ${media.toFixed(2)} - Estude mais um pouco. Você foi reprovado.`);
}