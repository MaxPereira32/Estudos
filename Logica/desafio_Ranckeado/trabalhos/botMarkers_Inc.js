
const comando="start"


function respostaBot(comando) {
    if (comando === "start") {
        //print
        return "Bot started";

    } else if(comando === "stop") {
        //print
        return "Bot stopped";

    } else if(comando === "pause") {
        //print
        return "Bot paused";

    } else {  
        //print
        return "unknown command" 
    } }  console.log(respostaBot(comando))
        
    

 
//Exemplo 2

let comande = "stop"

switch (comande){
    case "start":
        console.log("Bot started")
        break

    case "stop":
        console.log("Bot stopped")
        break

    case "pause":
        console.log("Bot paused")
    break

    default:
        console.log("unknown command")
}


/*Entrega do trabalho (Substituido Comando por comand e comande) para não 
 confudir o sistem.*/

const comand = gets();
if (comand === "start") {
    print("Bot started");
} else if (comand === "stop") {
    print("Bot stopped");
} else if (comand === "pause") {
    print("Bot paused");
} else {
    print("unknown command");
}   */