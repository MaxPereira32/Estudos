// =====================================================================
// CLASSIFICADOR DE NÍVEL DE HERÓI
// =====================================================================

// --- VARIÁVEIS ---

// String: armazena o nome do herói. 'let' permite reatribuição futura.
let nomeDoHeroi = "Invencivel"

// Number: representa a experiência (XP) atual do herói. Inicia em 900.
let xp = 900

// Undefined: declarada sem valor inicial. Receberá o nome do nível durante o loop.
let nivel

// Null: guarda o nível da iteração anterior para evitar repetições no console.
let nivelAnterior = null

// Constante Number: incremento fixo de XP a cada iteração do loop.
const passo = 100

// --- ARRAY DE OBJETOS ---

// Cada objeto representa um nível com:
//   limite: XP máximo da faixa (Number)
//   nome:   nome do nível (String)
const niveis = [
  {limite: 1000, nome : "Ferro"},
  {limite: 2000, nome : "Bronze"},
  {limite: 5000, nome:  "Prata"},
  {limite: 7000, nome: "Ouro"},
  {limite: 8000, nome: "Platina"},
  {limite: 9000, nome: "Ascendente"},
  {limite: 10000, nome: "Radiante"}
]

// --- LOOP PRINCIPAL ---
// Executa enquanto XP estiver dentro da faixa máxima dos níveis (> 0).
// A cada iteração:
//   1. Descobre o nível atual baseado no XP
//   2. Incrementa o XP
//   3. Exibe no console se o nível mudou

while (xp > 0 ){

  // find()     -> percorre o array e retorna o PRIMEIRO objeto cujo 'limite' seja >= XP
  // ?.nome     -> optional chaining: acessa 'nome' apenas se find() retornou um objeto
  // ??         -> nullish coalescing: se o resultado for null/undefined, usa "Radiante"
  nivel = niveis.find(n => xp <= n.limite)?.nome ?? "Radiante"

  // += -> operador de atribuição com adição: equivalente a xp = xp + passo
  xp += passo

  // !== -> operador de desigualdade estrita (compara valor E tipo)
  if(nivel !== nivelAnterior){
    // Template string (crases) com ${} para interpolar variáveis no texto
    console.log(`XP: ${xp} - o Héroi com nome ${nomeDoHeroi} está no nível ${nivel}`)
  }

  // Atualiza o nível anterior para a próxima comparação
  nivelAnterior = nivel
}

// Exibe o estado final após o loop terminar
console.log(`XP: ${xp} - o Héroi com nome ${nomeDoHeroi} está no nível ${nivel}`)
