import React, { useState } from 'react';

// Classe contendo as regras de negócio
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

// Componente React Principal
export default function DesafioClassJogo() {
    // Definindo os estados (React State)
    const [nome, setNome] = useState<string>("");
    const [idade, setIdade] = useState<string>("");
    const [personagem, setPersonagem] = useState<string>("Mago");
    const [mensagem, setMensagem] = useState<string>("Estamos aguardando");

    // Função disparada ao clicar no botão
    const handleConfirmar = () => {
        const idadeValor = Number(idade);
        const heroi = new Aventureiro(nome, idadeValor, personagem);
        setMensagem(heroi.atacar());
    };

    return (
        <div style={{ backgroundColor: 'rgb(173, 173, 173)', padding: '20px', minHeight: '100vh', fontFamily: 'sans-serif' }}>
            
            <div id="title" style={{ color: 'blue' }}>
                <h3>Seja bem-vindo Aventureiro. DIGITE SEUS DADOS!</h3>
            </div>
            
            <div style={{ marginBottom: '10px' }}>
                <input 
                    type="text" 
                    placeholder="Seu nome" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                    style={{ marginRight: '5px' }}
                />
                <input 
                    type="number" 
                    placeholder="Sua idade" 
                    value={idade} 
                    onChange={(e) => setIdade(e.target.value)} 
                    style={{ marginRight: '5px' }}
                />
                
                <select 
                    id="personagem" 
                    value={personagem} 
                    onChange={(e) => setPersonagem(e.target.value)}
                    style={{ marginRight: '5px' }}
                >
                    <option value="Mago">Mago</option>
                    <option value="Guerreiro">Guerreiro</option>
                    <option value="Ninja">Ninja</option>
                    <option value="Monge">Monge</option>
                </select>
                
                <button onClick={handleConfirmar}>confirmar</button>
            </div>

            <div style={{ 
                background: 'green', 
                color: 'white', 
                padding: '10px', 
                display: 'inline-block',
                borderRadius: '5px'
            }}>
                {mensagem}
            </div>

        </div>
    );
}
