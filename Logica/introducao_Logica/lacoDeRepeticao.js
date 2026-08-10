// =========================================================================
// 🔄 ESTRUTURA DE REPETIÇÃO: FOR (Controle Definido)
// =========================================================================
// -> É a melhor escolha quando você SABE EXATAMENTE quantas vezes quer repetir.
// -> Toda a lógica de controle fica centralizada na própria linha do "for".

let pontoDeVida = 0

// 🔍 Entendendo os 3 passos dentro do parênteses:
// 1️⃣ let i = 1    -> INICIALIZAÇÃO: Cria a variável de controle (executa só uma vez no começo).
// 2️⃣ i <= 10      -> CONDIÇÃO: O loop roda ENQUANTO isso for verdade.
// 3️⃣ i++          -> INCREMENTO: Soma +1 na variável "i" ao final de cada rodada.

for (let i = 1; i <= 10; i++) {
    pontoDeVida += 1 // ➕ Soma 1 ao total de pontos de vida atual (operador de atribuição aditiva).
    console.log("Tomou poção mágica " + i) // 💻 Printa 10 vezes (do i=1 até o i=10)
}

// 🛑 Fora do loop: Só executa DEPOIS que o "for" terminar todas as 10 repetições.
console.log(pontoDeVida + " Total de vida") // 💻 Printa: "10 Total de vida"

// =========================================================================
// 🎯 RESUMO DO FLUXO:
// A cada rodada, "i" funciona como o número da poção atual (1, 2, 3...) 
// e "pontoDeVida" vai acumulando o valor total até chegar em 10.
// =========================================================================
