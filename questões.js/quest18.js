let estadoCivil = prompt("Digite seu estado civil (solteiro, casado, divorciado, viúvo):");

estadoCivil = estadoCivil.toLowerCase();

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


