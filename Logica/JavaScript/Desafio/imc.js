/* Calcule o IMC (Índice de Massa Corporal) de uma pessoa e classifique-a conforme a tabela abaixo:

IMC = peso / (altura * altura)

Classificação imc EM ADULTOS:
- IMC menor que 18.5: Abaixo do peso
- IMC entre 18.5 e 24.9: Peso normal
- IMC entre 25 e 29.9: Sobrepeso
- IMC entre 30 e 34.9: Obesidade
- IMC entre 35 e 39.9: Obesidade grave

Math.pow(x: number, y: number): number. Retorna o valor de uma expressão base elevada a uma potência especificada.
------------------------------------------------------------------------------*/

const peso = 90; // em kg
const altura = 1.85; // em metros

const imc = peso / Math.pow(altura, 2); 

let classificacao;
if (imc < 18.5) {
    classificacao = "Abaixo do peso";
}else if (imc >= 18.5 && imc <= 24.9){
    classificacao = "Peso normal";
} else if ( imc >= 25 && imc <= 29.9){
    classificacao = "Sobrepeso";
} else if ( imc >=30 && imc <= 34.9) {
    classificacao = "Obesidade";
} else if ( imc >= 35 && imc <= 39.9) {
    classificacao = "Obesidade grave";
}

console.log(`O IMC é: ${imc.toFixed(2)} e a classificação é: ${classificacao}`);