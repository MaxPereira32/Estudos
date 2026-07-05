let nomeDoHeroi = "invencivel"
let xp = 900
const passo = 1000

const niveis = [
    {limite: 1000, nome : "Ferro"      },
    {limite: 2000, nome : "Bronze"     },
    {limite: 5000, nome : "Prata"      },
    {limite: 7000, nome : "Ouro"       },
    {limite: 8000, nome : "Platina"    },
    {limite: 9000, nome : "Ascendente" },
    {limite: 10000, nome: "Imortal"    },
]

let nivel
while (xp > 0) {
    nivel = niveis.find(n => xp <= n.limite)?.nome ?? "Radiante"
    console.log(`Xp: ${xp} - O Herói de nome ${nomeDoHeroi} está no nível ${nivel}`)

    if (nivel === "Radiante") break
    xp += passo
}
console.log(`Xp: ${xp} - O Herói de nome ${nomeDoHeroi} está no nível ${nivel}`)
