
let nomeDoItem = "farinha"; // string
let preco = 4.5;  // number
let quantidade = 3;// number
let estaDisponivel = true; //bolean

var itens ={
    0: ["farinha", 4.5, 3, true],
    1: ["açúcar", 3.5, 2, true],
    2: ["arroz", 5.0, 1, false]
} 

function calcularProduto(nomeDoItem, preco, quantidade, estaDisponivel){
 for(let index in itens){
    let [nomeDoItem, preco, quantidade, estaDisponivel] = itens[index]
    let total = preco * quantidade
    console.log(`O item ${nomeDoItem}  ${quantidade} unidade(s) por ${total}.`)
 }
}




