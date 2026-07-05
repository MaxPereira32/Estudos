let nomeDoHeroi = "Invencível"
let xp = 1000
let nivel
let nivelAnterior = null

const passo = 100

const niveis = [
    {limite : 1000, nome: "Ferro"},
    {limite : 2000, nome : "Bronze"},
    {limite : 5000, nome : "Prata"},
    {limite : 7000, nome : "Ouro"},
    {limite : 8000, nome : "Platina"},
    {limite : 9000, nome : "Ascendente"},
    {limite : 10000, nome : "Imortal"},
]

 
 while (xp > 0){
    xp += passo
    nivel = niveis.find(n => xp <= n.limite)?.nome ?? "Radiante"
       
    if ( nivel !== nivelAnterior){
     console.log(`XP: ${xp} - O Herói de nome ${nomeDoHeroi} está no nível ${nivel}`)   
    }

    nivelAnterior = nivel
 }
 
 console.log(`XP: ${xp} - O Herói de nome ${nomeDoHeroi} está no nível ${nivel}`)


