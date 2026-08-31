/* O objeto com as opções de pagamento pode ficar de fora para ser reutilizado
 Quando a Array tem opção de lista numerica deve-se usar {} e se houver nomes indicando a propriedade (desconto) usa-se {}. Vede arquivos: tt.js e capturandoPokemin.js*/

const opcoesPagamento = {
    0: { nome: "Pix", desconto: 15 },
    1: { nome: "Débito", desconto: 10 },
    2: { nome: "À vista em Dinheiro", desconto: 15 },
    3: { nome: "Crédito 2x", desconto: 0 },
    4: { nome: "Crédito acima de 2x", desconto: -10 } 
};

// Criamos a função que recebe o valor do produto e o código do método de pagamento
function calcularPagamento(valorDoProduto, metodoPagamento) {
    // Buscamos a opção escolhida diretamente no objeto
    const opcaoSelecionada = opcoesPagamento[metodoPagamento];
    
    // Verificação de segurança caso insiram um código inválido (ex: 5)
    if (!opcaoSelecionada) {
        console.log(`Opção ${metodoPagamento} inválida.`);
        return; 
    }

    // Pega a porcentagem de desconto direto do objeto
    const porcentagemDesconto = opcaoSelecionada.desconto;

    // Cálculos
    let desconto = valorDoProduto * (porcentagemDesconto / 100);
    let precoFinal = valorDoProduto - desconto;

    let fatura = desconto.toFixed(2);
    let final = precoFinal.toFixed(2);

    // Formatação do texto de desconto/acréscimo
    let totalformatado;
    if (porcentagemDesconto > 0) {
        totalformatado = `desconto de ${porcentagemDesconto}%`;
    } else if (porcentagemDesconto === 0) {
        totalformatado = "sem desconto (0%)";
    } else {
        totalformatado = `acréscimo de ${Math.abs(porcentagemDesconto)}% (juros)`;
    }

    // Exibição dos resultados
    console.log(`Forma de pagamento selecionada: ${opcaoSelecionada.nome} (${totalformatado})`);
    
    if (desconto < 0) {
        // Se o desconto for negativo, é um acréscimo, então mudamos a mensagem
        console.log(`Acréscimo aplicado: R$ ${Math.abs(desconto).toFixed(2)}`);
    } else {
        console.log(`Você economizou: R$ ${fatura}`);
    }
    
    console.log(`Preço final a pagar: R$ ${final}`);
    console.log("-----------------------------------------");
}

// Agora você pode chamar a função várias vezes passando valores diferentes!
calcularPagamento(150, 0); // Pix

