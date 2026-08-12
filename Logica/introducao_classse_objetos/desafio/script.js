class Aventureiro {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let acao = "";

        if (this.tipo === "monge") {
            acao = "usou artes marciais";
        } else if (this.tipo === "mago") {
            acao = "usou magia";
        } else if (this.tipo === "guerreiro") {
            acao = "usou espada";
        } else if (this.tipo === "Ninja"){
            acao = "usou shuriken";
        }
        else {
            return "Inválido";
        }

        let efeito = "";
        for (let i = 0; i < 3; i++) {
            efeito += "!";
        }

        return ` ${this.nome} tem ${this.idade} anos e é um ${this.tipo} que ${acao} ${efeito}`;
    }
}
//Ele serve para descobrir qual é o tipo de uma variável ou de um valor e sempre retorna uma palavra (string)
if (typeof document === "undefined") {

    let nome = "Max";
    let idade = 25;
    let tipo = "Ninja";

    const heroi = new Aventureiro(nome, idade, tipo);
    console.log(heroi.atacar());
}
