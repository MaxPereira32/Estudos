"use strict";


const FAIXAS_HORARIO = [
    { inicio: 0, fim: 6, periodo: 'Madrugada' },
    { inicio: 6, fim: 12, periodo: 'Manhã' },
    { inicio: 12, fim: 18, periodo: 'Tarde' },
    { inicio: 18, fim: 24, periodo: 'Noite' },
];

function obterPeriodo(hora) { // metiga ações para inibir nªs negativos e acima de 23
    if (!Number.isInteger(hora) || hora < 0 || hora > 23) {
        throw new Error('Hora inválida. Informe um valor inteiro de 0 a 23.');
    }

    const faixa = FAIXAS_HORARIO.find(
        ({ inicio, fim }) => hora >= inicio && hora < fim
    );

    if (!faixa) {
        throw new Error(`Nenhuma faixa de horário encontrada para ${hora}h.`);
    }

    return faixa.periodo;
}

// Exemplo
const hora = 18;

try {
    const periodo = obterPeriodo(hora);
    console.log(`O período é ${periodo}.`);
} catch (erro) {
    console.error(erro.message);
}
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa