
let niveis = [
    { limite: 10, nome: "Ferro" },
    { limite: 20, nome: "Bronze" },
    { limite: 50, nome: "Prata" },
    { limite: 80, nome: "Ouro" },
    { limite: 90, nome: "Diamante" },
    { limite: 100, nome: "Lendário" },
];

let saldoVitorias = 0;
let nivel = "";

while (nivel !== "Imortal") {
    let vitorias = 15;
    let derrotas = 2;
 
    saldoVitorias += vitorias - derrotas;
    nivel = niveis.find((n) => saldoVitorias <= n.limite)?.nome ?? "Imortal";

    console.log(`+${vitorias} vitórias / -${derrotas} derrotas | Saldo: ${saldoVitorias} | Nível: ${nivel}`);
}

console.log(`\nO Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
