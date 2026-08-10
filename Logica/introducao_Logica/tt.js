let nomeDoHeroi = "Invencível";
let xp = 10;
let nivel;
let passo = 500;
//let nivelAnterior = null
let niveis = [
  { limite: 1000, nome: "Ferro" },
  { limite: 2000, nome: "Bronze" },
  { limite: 5000, nome: "Prata" },
  { limite: 7000, nome: "Ouro" },
  { limite: 8000, nome: "Platina" },
  { limite: 9000, nome: "Ascendente" },
  { limite: 10000, nome: "Imortal" },
  
]



while (xp > 0) {
  xp += passo;
  nivel = niveis.find((n) => xp <= n.limite)?.nome ?? "Radiante";
 // if ( nivel !== nivelAnterior){
  console.log(`XP: ${xp} - O Heroi com nome ${nomeDoHeroi} está no nivel ${nivel}`,
  );
//}
 
//nivelAnterior = nivel

if (nivel === "Radiante") break;

}
