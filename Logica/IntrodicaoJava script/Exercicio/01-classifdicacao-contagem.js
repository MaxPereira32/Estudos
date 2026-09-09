/*
const N = 7;


if (!Number.isInteger(N) || N <= 0) {
  console.log("Erro: N deve ser um inteiro positivo.");
} else {
  let par = 0;
  let impar = 0;

  for (let i = 1; i <= N; i++) {
    const Par = i % 2 === 0; 
    if (Par) {
      par++;
    } else {
      impar++;
    }

   
    console.log(`${i} é ${par ? "par" : "ímpar"}`);
  }

  console.log(`Total de pares: ${par}`);
  console.log(`Total de ímpares: ${impar}`);
}*/


const number1 = 1;
const number2 = -10;


function conferir(i) {
  if (!Number.isInteger(i) || i <= 0){
     return "Erro: O nª deve ser um inteiro positivo.";
  } else if( i % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

console.log(conferir(number1));
console.log(conferir(number2));