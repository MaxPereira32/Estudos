/*var jogador1 = 1;
var jogador2 = 0;
var placar = 0;


//if ternario
 
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores inválidos');

//usando if && else if
  if (jogador1 > 0 && jogador2 == 0) {
    console.log("Jogador1 marcou ponto");
    placar = jogador1 > jogador2;
  } else if (jogador2 > 0 && jogador1 == 0) {
    console.log("Jogador2 marcou ponto");
    placar = jogador2 > jogador1;
  } else {
    console.log("Niguem marcou ponto");
  }
  //estrutura de loop, importante colocar o 'breack' se não ele consulta para a proxima condição
  switch (placar){
    case placar = jogador1 > jogador2:
    console.log('Vitória do jogador 1');
    break;
    case placar = jogador2 > jogador1:
        console.log('Vitória do Jogador2');
        break;
        default:
            console.log('Não houve ganhadores')
  }
  */

  //Estrutura de repetioção

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = { 
    propriedades1: 'valor1', 
    propriedades2: 'valor2', 
    propriedades3: 'valor3'

}
/* fo - executa uma instrução até que ela seja falça
 for (let indice = 0; indice < array.length; indice++){
    console.log(indice)
 }

 //for in executa repetição a partir de uma propriedade
  for (let i in array){
    console.log(i);
  }

  // com object

  for (i in object) {
    console.log(i);
  } 
*/
   
    // for/of - exxecuta repetição a partir de valor. Proém não funcionam com objetos pois as propriedades variam, diferente do índice em um array que sempre serão números inteiros

  /*  for (i of array) {
        console.log(i)
    }

    //com object
    for (i of object.propriedades1) {
        console.log(i)
    } 
*/

    var a = 0;

    while (a < 10){
        a++;
        console.log(a);
    }

    do {
        a++;
        console.log(a)
    } while ( a< 10);

