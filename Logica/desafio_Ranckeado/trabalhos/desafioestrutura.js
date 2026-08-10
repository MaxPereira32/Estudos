// Simula as entradas da plataforma (DIO)
const entradas = [
    "BOT",
    "BOT: Hello",
    "USER: Hi",
    "BOT: How can I help?",
    "FIM"
];

let indice = 0;

// Simula o gets()
function gets() {
    return entradas[indice++];
}

// Simula o print()
function print(valor) {
    console.log(valor);
}

// ===== Seu código permanece igual =====

const tipo = gets();

let contador = 0;
let mensagem = gets();

while (mensagem !== "FIM") {

    if (mensagem.startsWith(tipo + ":")) {
        contador++;
    }

    mensagem = gets();
}

print(contador);

//======================================================================

const tipo = gets();

let contador = 0;
let mensagem = gets();

while (mensagem !== "FIM") {

    if (mensagem.startsWith(tipo + ":")) {
        contador++;
    }

    mensagem = gets();
}

print(contador);




// print(contador);
// BOT
// BOT: Hello
// USER: Hi
// BOT: How can I help?
// FIM

// O algoritmo é:

// ler tipo

// contador = 0

// ler primeira mensagem

// enquanto mensagem != "FIM"

//     verificar se a mensagem começa com o tipo

//         se sim
//             contador++

//     ler próxima mensagem

// imprimir contador

//Perceba que ainda não estamos falando de JavaScript. Estamos apenas descrevendo a lógica.