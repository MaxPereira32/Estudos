"use strict";

// ============================================
// EXERCÍCIO 2 — SUA VERSÃO (faturamento.js)
// ============================================
//
// Sua tarefa: escrever TUDO sozinho, usando apenas:
//   - const / let
//   - if / else
//   - for
//   - console.log / console.error
//
// NADA de: Math.round, Array.isArray, throw, objetos de retorno.
// Simples e seu.
//
// Dica para começar (as 4 perguntas):
//   1. Entrada: array ordens
//   2. Saída: total, maior, menor, quantidade > 200
//   3. Repetição: para cada ordem, faço as 4 verificações
//   4. Memória: total, maior, menor, contador — fora do for

const ordens = [350.00, 120.50, 89.90, 450.00, 200.75, 310.40, 175.25];

// ============================================
// COMEÇE AQUI
// ============================================

// 1. VALIDAÇÃO
//    Se ordens estiver vazio (ordens.length === 0),
//    imprima um erro com console.error e PARE (return ou else).

// 2. ACUMULADORES (memória — fora do for)
//    let total = 0;
//    let maior = ordens[0];   <- NÃO use 0! Lembre-se da lição.
//    let menor = ordens[0];   <- idem.
//    let acimaDe200 = 0;

// 3. O LOOP
//    for (let i = 0; i < ordens.length; i++) {
//        const valor = ordens[i];
//        // 4 verificações aqui dentro
//    }

// 4. SAÍDA
//    console.log com os 4 resultados