

class Mensagem {
    constructor(cliente, texto) {
        this.cliente = cliente;
        this.texto = texto;
    }
    
    formatar() {
        return `Para ${this.cliente}: ${this.texto}`;
    }
}

function processoMensagem(entrada) {
    const separador = entrada.indexOf(":");
    
    if (separador === -1) {
        return "Formato Invalido";
    }
    
    const cliente = entrada.slice(0, separador);
    const texto = entrada.slice(separador + 1);
    
    const mensagem = new Mensagem(cliente, texto);
    return mensagem.formatar();
}

const entrada = "Lucas:Seu pedido foi enviado";

console.log(processoMensagem(entrada));