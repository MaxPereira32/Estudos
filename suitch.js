// =========================================================================
// 🔀 ESTRUTURA DE DECISÃO: SWITCH / CASE / BREAK / DEFAULT
// =========================================================================
// -> É usada para substituir múltiplos "if/else" quando testamos uma única variável.
// -> Ela faz uma comparação de igualdade exata (===) com cada caso ("case").

let frutas = "morango"

switch (frutas) {
  
  case "laranja":
    console.log("suco de laranja")
    break // 🛑 BREAK: Para a execução e sai do switch. Se esquecer, o código "escorrega" pro próximo case!

  // 🤝 CASOS AGRUPADOS (Multi-case):
  // Se "frutas" for "banana" OU "morango", ambos vão executar o mesmo bloco de código abaixo.
  case "banana":
  case "morango":
    console.log("vitamina de " + frutas) // 💻 Este será executado! Printa: "vitamina de morango"
    break

  case "maçã":
    console.log("suco de maçâ")
    break
    
  default:
    // 🌍 DEFAULT: Funciona como o "else". É executado se nenhum dos "cases" anteriores for verdadeiro.
    console.log("suco genérico")
}

// =========================================================================
// 🎯 RESUMO DO COMPORTAMENTO DO CÓDIGO:
// Como a variável fruta é "morango", o switch pula direto para o bloco agrupado,
// imprime "vitamina de morango" e o "break" impede que ele leia o caso da maçã.
// =========================================================================
