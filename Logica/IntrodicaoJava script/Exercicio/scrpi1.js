  
/*
  const arr = [-15, -9, 1, 2, 3, 4, 5, 6, -10] ;
  let maior = -Infinity;
  let segundoMaior = -Infinity;
  let menor = Infinity;
  let segundoMenor = Infinity; 


  for (const numero of arr) {
  if (numero > maior) {
    segundoMaior = maior;
    maior = numero;
  } else if (numero > segundoMaior) {
    segundoMaior = numero;
  }
  // Atualiza os dois menores
  if (numero < menor) {

    segundoMenor = menor;
    menor = numero;
  } else if (numero < segundoMenor) {
    segundoMenor = numero;
  }
}

console.log(`Os dois maiores são: ${maior} e ${segundoMaior}`);
console.log(`Os dois menores são: ${menor} e ${segundoMenor}`);

const produto = Math.max(maior * segundoMaior, menor * segundoMenor);
console.log(`Resultado: ${produto}`);
*/

const arr = [-20, -15, 2];

let maior = -Infinity;
let segundoMaior = -Infinity;

let menor = Infinity;
let segundoMenor = Infinity;

for (const numero of arr) {

  // Atualiza os dois maiores
  if (numero > maior) {
    segundoMaior = maior;
    maior = numero;
  } else if (numero > segundoMaior) {
    segundoMaior = numero;
  }

  // Atualiza os dois menores
  if (numero < menor) {
    segundoMenor = menor;
    menor = numero;
  } else if (numero < segundoMenor) {
    segundoMenor = numero;
  }
}

console.log(`Os dois maiores são: ${maior} e ${segundoMaior}`);
console.log(`Os dois menores são: ${menor} e ${segundoMenor}`);

const produtoMaiores = maior * segundoMaior;
const produtoMenores = menor * segundoMenor;

console.log(`Produto dos maiores: ${produtoMaiores}`);
console.log(`Produto dos menores: ${produtoMenores}`);

const produto = Math.max(produtoMaiores, produtoMenores);

console.log(`Resultado: ${produto}`);