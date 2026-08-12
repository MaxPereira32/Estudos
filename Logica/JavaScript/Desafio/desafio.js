/* FAÇA UM PROGRAMA QUE CALCULE O CUSTO TOTAL DE UMA VIAGEM, DADO O PREÇO DO COMBUSTÍVEL, A DISTÂNCIA A SER PERCORRIDA E O CONSUMO MÉDIO DO VEÍCULO. 
Você terá 3 variáveis:
'- Preço do combustível'
'- Distância a ser percorrida'
'- Consumo médio do veículo'
*/


let precoCombustivel = 5.50; // Variável do tipo número QUE PODE SER ALTERADO
let distancia = 100; // Variável do tipo número QUE PODE SER ALTERADO
let KmPorLitro = 7.5; // Variável do tipo número QUE PODE SER ALTERADO

let custoPorLitro = distancia / KmPorLitro; 
let custoTotal = custoPorLitro * precoCombustivel;

console.log(`O custo total da viagem é: R$  ${custoTotal.toFixed(2)}`); 