let diaSemana = prompt("Digite o dia da semana:");

diaSemana = diaSemana.toLowerCase();

if (diaSemana === "segunda-feira" || diaSemana === "terça-feira" || diaSemana === "quarta-feira" || diaSemana === "quinta-feira" || diaSemana === "sexta-feira") {
    console.log(`O dia ${diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1)} é um dia útil.`);
} else if (diaSemana === "sábado" || diaSemana === "domingo") {
    console.log(`O dia ${diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1)} é um fim de semana.`);
} else {
    console.log("Dia da semana inválido. Por favor, insira um dia da semana válido (por extenso).");
}
