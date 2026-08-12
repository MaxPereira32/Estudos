/*Estruturas condicionais
Buleinas - true ou false


Saber se o número é par ou ímpar*/

const numero = 0; 

const ehnumeroDivisivel = (numero % 2) === 0;
console.log(ehnumeroDivisivel);

/*Estrutura condicional if/else ( decisão)*/

if (numero === 0) {
    console.log("O número é INVALIDO");
} else if (ehnumeroDivisivel) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}