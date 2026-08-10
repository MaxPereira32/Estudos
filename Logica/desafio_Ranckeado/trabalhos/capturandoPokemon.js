

//let escolhaDoTreinador =  parseInt(gets());
let escolhaDoTreinador =  4 
let pokemonEscolhido; 

const entrada = [
   "Pokémon: 1", "Bulbassaur",
    "Pokémon: 2", "Charmander",
    "Pokémon: 4", "Pikatchu",
    "Pokémon: 5", "Newtow" 
]


if (escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbassaur";
} else if (escolhaDoTreinador === 2) {
    pokemonEscolhido = "Charmander";

} else if (escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikatchu";

} else{
    pokemonEscolhido = "Newtow";
}

console.log(`Parabéns Treinado você escolher, ${pokemonEscolhido}  como seu Pohémon 
    inicial!`)