const itens = [
    ["farinha", 4.5, 3, true],
    ["açúcar", 3.5, 2, true],
    ["arroz", 5.0, 1, false]
];

function calcularProduto(nome, preco, quantidade, disponivel) {
    if (disponivel) {
        const total = preco * quantidade;
        console.log(`O item ${nome} (${quantidade} un) deu total de R$ ${total}`);
    } else {
        console.log(`O item ${nome} está indisponível.`);
    }
}

for (const item of itens) {
    let [nome, preco, quantidade, disponivel] = item;
    calcularProduto(nome, preco, quantidade, disponivel);
}
