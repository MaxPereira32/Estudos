

/* Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

Média = (nota1 + nota2 + nota3) / 3

Classificação:
- Média menor que 5: Reprovado
- Média entre 5 e 7: Recuperação
- Média acima de 7: Aprovado */

 let nota1 = 7;
 let nota2 = 8;
 let nota3 = 7;

 let media = (nota1 + nota2 + nota3) / 3;

 let med = (media.toFixed(2));

 let lassificacao="";
 if ( media < 5 ){
    classificacao = "Reprovado";
 } else if (media >= 5 && media <= 7){
    classificacao = "Recuperação";
 } else{
    classificacao = "Aprovado";
 }
 console.log(`A média do aluno é ${med} e sua classificação é ${classificacao}`);