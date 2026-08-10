let nomeDoHeroi = "invencivel"
let xp = 400
let passo = 600
let nivel

let niveis = [
    {limite: 1000, nome : "Iniciante"      },
    {limite: 2000, nome : "Bronze"     },
    {limite: 5000, nome : "Prata"      },
    {limite: 7000, nome : "Ouro"       },
    {limite: 8000, nome : "Platina"    },
    {limite: 9000, nome : "Ascendente" },
    {limite: 10000, nome: "Imortal"    },
]


while (xp > 0) {
    xp += passo
    nivel = niveis.find(n => xp <= n.limite)?.nome ?? "Supremo SSS"
    console.log(`Xp: ${xp} - O Herói de nome ${nomeDoHeroi} está no nível ${nivel}`)

    if (nivel === "Supremo SSS") break
    
}

