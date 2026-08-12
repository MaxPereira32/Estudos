

/* Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

Média = (nota1 + nota2 + nota3) / 3

Classificação:
- Média menor que 5: Reprovado
- Média entre 5 e 7: Recuperação
- Média acima de 7: Aprovado */


const nota1 = 5;
const nota2 = 8;
const nota3 = 9;

const media = (nota1 + nota2 + nota3) / 3;
console.log(`A média do aluno é: ${media.toFixed(2)}`);

/*Método de avaliação*/
let classificacao;
if(media < 5){
    classificacao = "Reprovado";
} else if(media >= 5 && media <= 7){
    classificacao = "em Recuperação";
} else {
    classificacao = "Aprovado";
}

console.log(`O aluno está: ${classificacao}`);