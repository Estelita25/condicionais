//questão 1
/*let numero = -9

    if (numero > 0) {
        console.log("numero positivo");
    } else if (numero < 0) {
        console.log ("numero negativo");
    } else {
        console.log("zero")
    }*/

// questão 2
/*let idade = 6

    if (idade >= 18) {
        console.log("Parabéns! Você é maior de idade");
    } else {
        console.log ("Infelizmente, você não é de maior");
    }*/

//questao 3
/*let numero1 = parseInt(prompt("Digite um número:"));
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
*/


//questão 4
/*let numero = parseInt(prompt("Digite um número inteiro:"));

if (numero % 2 === 0) {
    console.log(`${numero} O número digitado é par.`);
} else {
    console.log(`${numero} O número digitado é ímpar.`);
}*/

//questão 5
/*let nota1 = obterNota("Digite primeira nota:");
let nota2 = obterNota("Digite segunda nota:");
let nota3 = obterNota("Digite terceira nota:");

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log(`Média: ${media.toFixed(2)} - Parabéns!!! Você foi aprovado.`);
} else {
    console.log(`Média: ${media.toFixed(2)} - Estude mais um pouco. Você foi reprovado.`);
}*/

//questão 6
/*let nome1 = obterNome("Digite o nome de uma pessoa:");
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
*/

// questão 7
/*let caractere;
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
*/

/*//questão 8
// Lê os três números do usuário
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let numero3 = parseFloat(prompt("Digite o terceiro número:"));

// Verifica se as entradas são números válidos
if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    console.log("Por favor, insira apenas números válidos.");
} else {
    // Ordena os números usando if...else
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

    // Exibe os números em ordem crescente
    console.log(`Os números em ordem crescente são: ${menor}, ${meio}, ${maior}`);
}*/

//questão 9
/*let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite a sua altura em metros:"));

// Calcula o IMC
let imc = peso / (altura * altura);

// Determina a categoria de peso com base no IMC
let categoria;

if (imc < 18.5) {
    categoria = "Abaixo do peso";
} else if (imc >= 18.5 && imc < 24.9) {
    categoria = "Peso normal";
} else if (imc >= 25 && imc < 29.9) {
    categoria = "Sobrepeso";
} else if (imc >= 30 && imc < 39.9) {
    categoria = "Obesidade";
} else {
    categoria = "Obesidade grave";
}

// Exibe o resultado
console.log(`Seu IMC é ${imc.toFixed(2)}. Categoria: ${categoria}.`);
*/

//questão 10
/*let numeroMes = parseInt(prompt("Digite o mês pelo número (1 a 12):"));

if (isNaN(numeroMes) || numeroMes < 1 || numeroMes > 12) {
    console.log("Número do mês inválido. Por favor, insira um número entre 1 e 12.");
} else {
    let nomeMes;

    if (numeroMes === 1) {
        nomeMes = "Janeiro";
    } else if (numeroMes === 2) {
        nomeMes = "Fevereiro";
    } else if (numeroMes === 3) {
        nomeMes = "Março";
    } else if (numeroMes === 4) {
        nomeMes = "Abril";
    } else if (numeroMes === 5) {
        nomeMes = "Maio";
    } else if (numeroMes === 6) {
        nomeMes = "Junho";
    } else if (numeroMes === 7) {
        nomeMes = "Julho";
    } else if (numeroMes === 8) {
        nomeMes = "Agosto";
    } else if (numeroMes === 9) {
        nomeMes = "Setembro";
    } else if (numeroMes === 10) {
        nomeMes = "Outubro";
    } else if (numeroMes === 11) {
        nomeMes = "Novembro";
    } else if (numeroMes === 12) {
        nomeMes = "Dezembro";
    }

    console.log(`O mês correspondente ao número ${numeroMes} é ${nomeMes}.`);
}
*/

//questão 11
/*let salario = parseFloat(prompt("Digite o seu salário:"));

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
*/

// questão 12
/*let numero = parseInt(prompt("Digite um número inteiro:"));

if (isNaN(numero)) {
    console.log("Entrada inválida. Por favor, insira um número inteiro.");
} else {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log(`O número ${numero} é divisível por 3 e por 5 ao mesmo tempo.`);
    } else {
        console.log(`O número ${numero} NÃO é divisível por 3 e por 5 ao mesmo tempo.`);
    }
}
    */

//questão 13
/* let diaSemana = prompt("Digite o dia da semana:");

diaSemana = diaSemana.toLowerCase();

if (diaSemana === "segunda-feira" || diaSemana === "terça-feira" || diaSemana === "quarta-feira" || diaSemana === "quinta-feira" || diaSemana === "sexta-feira") {
    console.log(`O dia ${diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1)} é um dia útil.`);
} else if (diaSemana === "sábado" || diaSemana === "domingo") {
    console.log(`O dia ${diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1)} é um fim de semana.`);
} else {
    console.log("Dia da semana inválido. Por favor, insira um dia da semana válido (por extenso).");
}
*/

//questão 14
/*// Lê o número inteiro fornecido pelo usuário
let nota = parseInt(prompt("Digite um número de 1 a 5:"));

// Verifica se a entrada é um número válido
if (isNaN(nota) || nota < 1 || nota > 5) {
    console.log("Número inválido. Por favor, insira um número entre 1 e 5.");
} else {
    // Usa switch/case para exibir a mensagem apropriada
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
*/

//questão 15
/*// Recebe o número do dia da semana do usuário
let numeroDia = parseInt(prompt("Digite um número entre 1 e 7:"));

// Verifica se o número é um inteiro válido dentro do intervalo
if (isNaN(numeroDia) || numeroDia < 1 || numeroDia > 7) {
    console.log("Número inválido. Por favor, insira um número entre 1 e 7.");
} else {
    // Usa switch/case para determinar o dia da semana
    switch (numeroDia) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda-feira");
            break;
        case 3:
            console.log("Terça-feira");
            break;
        case 4:
            console.log("Quarta-feira");
            break;
        case 5:
            console.log("Quinta-feira");
            break;
        case 6:
            console.log("Sexta-feira");
            break;
        case 7:
            console.log("Sábado");
            break;
        default:
            console.log("Número inválido. Por favor, insira um número entre 1 e 7.");
            break;
    }
}
*/

//questão 17
/*// Recebe a idade do usuário
let idade = parseInt(prompt("Digite a sua idade:"));

// Verifica se a idade é um número válido
if (isNaN(idade) || idade < 0) {
    console.log("Entrada inválida. Por favor, insira uma idade válida (número positivo).");
} else {
    // Determina a categoria etária com base na idade
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
*/

//questão 18
/*// Recebe o estado civil do usuário
let estadoCivil = prompt("Digite seu estado civil (solteiro, casado, divorciado, viúvo):");

// Converte a entrada para minúsculas para facilitar a comparação
estadoCivil = estadoCivil.toLowerCase();

// Usa switch/case para exibir a mensagem apropriada
switch (estadoCivil) {
    case "solteiro":
        console.log("Você é solteiro.");
        break;
    case "casado":
        console.log("Você é casado.");
        break;
    case "divorciado":
        console.log("Você é divorciado.");
        break;
    case "viúvo":
        console.log("Você é viúvo.");
        break;
    default:
        console.log("Estado civil inválido. Por favor, insira um dos seguintes: solteiro, casado, divorciado ou viúvo.");
        break;
}
*/

