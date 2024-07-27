let nome1 = obterNome("Digite o nome de uma pessoa:");
let nome2 = obterNome("Digite o nome de outra pessoa:");

let comprimentoNome1 = nome1.length;
let comprimentoNome2 = nome2.length;

function obterNome(mensagem) {
    let nome;
    do {
        nome = prompt(mensagem);
        if (nome === null || nome.trim() === "") {
            console.log("Nome inválido. Por favor, insira um nome válido.");
        }
    } while (nome === null || nome.trim() === "");
    return nome.trim();
}

if (comprimentoNome1 > comprimentoNome2) {
    console.log(`"${nome1}" possui o maior número de caracteres (${comprimentoNome1} caracteres).`);
} else if (comprimentoNome2 > comprimentoNome1) {
    console.log(`"${nome2}" possui o maior número de caracteres (${comprimentoNome2} caracteres).`);
} else {
    console.log(`"${nome1}" e "${nome2}" possuem o mesmo número de caracteres (${comprimentoNome1} caracteres).`);
}