

const precoEtiqueta = 100;
const formaDePagamento = 3;



let metodo
if (formaDePagamento === 1) {
    metodo = precoEtiqueta - (precoEtiqueta * 0.15);
    console.log(`Forma de pagamento selecionada: PIX (desconto de 15%)`)
} else if (formaDePagamento === 2) {
   metodo = precoEtiqueta - (precoEtiqueta * 0.1);
    console.log(`Forma de pagamento selecionada: Débito (desconto de 10%`)
} else if (formaDePagamento === 3) {
    metodo = precoEtiqueta - (precoEtiqueta * 0);
    console.log(`Forma de pagamento selecionada: Dinheiro/Débito (sem desconto)`);
} else if (formaDePagamento === 4){
    metodo = precoEtiqueta + (precoEtiqueta * 0.1);
    console.log(`Forma de pagamento selecionada: Cédito acima de 2x (acédimo de 10%)`)
} else{
    console.log(`Opção ${formaDePagamento} inválida.`);
        return; 
}
console.log(`Sua compra de ${precoEtiqueta} R$`)
console.log(`Total a pagar: ${metodo} R$`)
console.log(`----------------------------------------------------------`)


