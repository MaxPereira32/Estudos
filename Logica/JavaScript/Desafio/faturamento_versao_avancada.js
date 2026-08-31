const ordens = [350.00, 120.50, 89.90, 450.00, 200.75, 310.40, 175.25];

function analisarFaturamento(lote) {
    if (!Array.isArray(lote) || lote.length === 0) {
        throw new Error("Contrato Violado: Lote inválido ou vazio.");
    }
    
    // 1. Inicialização do Estado
    let totalEmCentavos = 0;
    let maior = lote[0]; // Ancoragem de domínio rigorosa (sem chutar '0')
    let menor = lote[0];
    let acimaDe200 = 0;

    // 2. O Loop de Processamento (O(n) tempo, O(1) espaço)
    for (let i = 0; i < lote.length; i++) {
        const valor = lote[i]; 

        // Agregação financeira protegendo contra imprecisão de ponto flutuante
        totalEmCentavos += Math.round(valor * 100);

        // Extração de limite superior
        if (valor > maior) {
            maior = valor;
        }
        
        // Extração de limite inferior
        if (valor < menor) {
            menor = valor;
        }

        // Aplicação isolada da regra de negócio
        if (valor > 200) {
            acimaDe200++;
        }
    }

    // 3. Retorno Estruturado
    return {
        total: totalEmCentavos / 100,
        maior,
        menor,
        acimaDe200
    };
}

// 4. Execução e Observabilidade (Camada Externa)
const relatorio = analisarFaturamento(ordens);

console.log(`Total faturado: R$ ${relatorio.total.toFixed(2)}`);
console.log(`Maior OS: R$ ${relatorio.maior.toFixed(2)}`);
console.log(`Menor OS: R$ ${relatorio.menor.toFixed(2)}`);
console.log(`Ordens acima de R$ 200,00: ${relatorio.acimaDe200}`);