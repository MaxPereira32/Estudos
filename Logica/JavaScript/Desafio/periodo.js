

const hora = 1;

// Rejeita dados fora do domínio real (0 a 23)
if (hora < 0 || hora > 23 || !Number.isInteger(hora)) {
   console.error("Erro: A hora informada deve ser um número inteiro entre 0 e 23.");
} else {
   let periodo;

   if (hora >= 0 && hora < 6) {
      periodo = 'Madrugada';
   } else if (hora < 12) {
      periodo = 'Manhã';
   } else if (hora < 18) {
      periodo = 'Tarde';
   } else {
      periodo = 'Noite'; // Aqui o else é seguro, pois sabemos que só sobrou 18..23
   }

   console.log(`O período é ${periodo}`);
}
