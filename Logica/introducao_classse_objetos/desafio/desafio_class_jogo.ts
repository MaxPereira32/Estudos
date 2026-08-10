class Aventureiro {
    nome: string;
    idade: number;
    tipo: string;

    constructor(nome: string, idade: number, tipo: string) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(): string {
        let acao: string = "";
        
        // Convertendo para minúsculo para garantir que a checagem não falhe
        // por causa de letras maiúsculas/minúsculas diferentes.
        const tipoLower: string = this.tipo.toLowerCase();

        if (tipoLower === "monge") {
            acao = "usou artes marciais";
        } else if (tipoLower === "mago") {
            acao = "usou magia";
        } else if (tipoLower === "guerreiro") {
            acao = "usou espada";
        } else {
            acao = "usou shuriken";
        }  
        
        let efeito: string = "";
        for (let i = 0; i < 3; i++) {
            efeito += "!";
        }

        return `${this.nome} tem ${this.idade} anos e é um ${this.tipo} que ${acao} ${efeito}`;
    }
}

// Selecionando elementos da DOM com seus devidos tipos em TypeScript
const nomeInput = document.getElementById('nome') as HTMLInputElement;
const idadeInput = document.getElementById('idade') as HTMLInputElement;
const personagemInput = document.getElementById('personagem') as HTMLSelectElement;
const title = document.getElementById('title') as HTMLDivElement;
const msg = document.getElementById('msg') as HTMLDivElement;
const bts = document.getElementById('bts') as HTMLInputElement;

if (title) {
    title.style.color = 'blue';
}

if (msg) {
    msg.style.background = 'green';
    msg.innerText = 'Estamos aguardando';
    msg.style.color = 'white';
}

if (bts) {
    bts.addEventListener('click', () => {
        // Convertendo o valor de idade (que vem como string) para number
        const idadeValor = Number(idadeInput.value);
        
        const heroi = new Aventureiro(nomeInput.value, idadeValor, personagemInput.value);
        
        if (msg) {
            msg.innerText = heroi.atacar();
        }
    });
}
