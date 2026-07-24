
let resultado = soma(5, 10)


console.log(`O resultado dessa função é ${resultado}`)

    function soma(numA, numB){
        let somatorio = numA + numB
        return somatorio
    }

    //**o "return" pode retornar apemas um objeto por vez, seja um resultado de uma expressã0 
    //seja um vetor

let userName = getFirstName("Lindomax-Lima-Pereira", "-") 
 console.log(`Seja vem vindo ${userName}`)

 userName = getFirstName("Luiz Calor silva", " ")
 console.log(`Seja vem vindo ${userName}`)

    function getFirstName(name, splitChar){
        let firstName = name.split(splitChar)[0]
        return firstName

    }


    //SPLIT - Pega cada  por espaço (-) e colocar no vetor
    // felipinho de Belém [felipinh/ de/ Belém]