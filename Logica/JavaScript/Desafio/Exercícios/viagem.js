/*Faça um programa em JavaScript que calcule o custo total de uma viagem. O programa deve solicitar ao usuário o número de dias da viagem, o custo diário de hospedagem, o custo diário de alimentação e o custo total do transporte. Em seguida, ele deve calcular e exibir o custo total da viagem.

você terá que solicitar ao usuário os seguintes dados:

- Preço do etanol
- Preço da gasolina
- Tipo de combustível do seu carro (etanol ou gasolina)
- Gasto médio de combustível por quilômetro
- Distância total da viagem

Imprima o custo total da viagem*/

const precoGasolina = 5.5;
const precoEtanol = 4.74;
const tipoCombustivel = "etanol";
const KmPorLitro = 7.5;
const distancia = 100;
var valorgasto = 0 ;

const litrosConsumidos = distancia / KmPorLitro;

if (tipoCombustivel === "etanol") {
  valorgasto = litrosConsumidos * precoEtanol;
} else {
  valorgasto = litrosConsumidos * precoGasolina;
}

console.log(`O custo total da viagem é: R$ ${valorgasto.toFixed(2)}, porque usamos ${tipoCombustivel}`);
