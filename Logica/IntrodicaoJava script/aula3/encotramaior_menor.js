  

  const arr = [1, 2, 3, 4, 5, 6, -10, -9];
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
