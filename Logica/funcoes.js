torrar()
injetarPao()

function torrar(){
console.log("torrar pão")
injetarPao()
}

function injetarPao(){
    console.log("preparando para injetar pão")
   console.log("finalizado")
}

//========================================================

main();

function main() {
  getData();
  checkVAlue();
  sendDataBse();
}

function getData() {
  console.log("preparando dados do usuário");
}

function checkVAlue() {
  console.log("validaddo dados");
}

function sendDataBse() {
  console.log("cadastrando dados");
}


//=====================================================


function enviarDados(){
    let nomeDoBanco = "banco-de-dados"
    console.log("salvandio dados em : "  + nomeDoBanco)

    if(3 === 3){
        console.log("senha Valida")
    }
}