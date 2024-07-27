let caractere;
do {
    caractere = prompt("Digite um caractere:");

    if (caractere === null || caractere.length !== 1 || !/[a-zA-Z]/.test(caractere)) {
        console.log("Entrada inválida. Por favor, insira um único caractere alfabético.");
    }
} while (caractere === null || caractere.length !== 1 || !/[a-zA-Z]/.test(caractere));

caractere = caractere.toLowerCase();

if ("aeiou".includes(caractere)) {
    console.log(`O caractere "${caractere}" é uma vogal.`);
} else {
    console.log(`O caractere "${caractere}" é uma consoante.`);
}