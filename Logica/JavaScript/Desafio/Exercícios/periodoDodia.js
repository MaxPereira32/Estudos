"use strict";

const FAIXAS_HORARIO = [
    { inicio: 0, fim: 6, periodo: 'Madrugada' },
    { inicio: 6, fim: 12, periodo: 'Manhã'    },
    { inicio: 12, fim: 18, periodo: 'Tarde'   },
    { inicio: 18, fim: 24, periodo: 'Noite'   },
];

function obterPeriodo(horarioTexto) { 
    // 1. Valida o formato do texto usando Expressão Regular (Regex) no padrão "HH:MM"
    const regexHora = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

    if (typeof horarioTexto !== 'string' || !regexHora.test(horarioTexto)) {
        throw new Error('Hora inválida. Informe um horário no formato "HH:MM" entre "00:00" e "23:59".');
    }

    // 2. Extrai apenas a parte da hora (antes dos dois-pontos) e converte em número inteiro
    const hora = Number(horarioTexto.split(':')[0]);

    // O código abaixo continua exatamente igual ao seu original:
    const faixa = FAIXAS_HORARIO.find(
        ({ inicio, fim }) => hora >= inicio && hora < fim
    );

    if (!faixa) {
        throw new Error(`Nenhuma faixa de horário encontrada para ${hora}h.`);
    }

    return faixa.periodo;
}

// ==========================================
// Exemplos de Uso
// ==========================================

const exemplos = ['14:35', '02:00', '18:00', '1', '-7', '25:00', 'texto-errado'];

exemplos.forEach(horario => {
    try {
        const periodo = obterPeriodo(horario);
        console.log(`Para o horário ${horario}, o período é: ${periodo}.`);
    } catch (erro) {
        console.error(`Erro ao processar "${horario}": ${erro.message}`);
    }
});
