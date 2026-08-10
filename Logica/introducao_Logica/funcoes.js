 /*torrar()
injetarPao()

function torrar(){
console.log("torrar pão")
injetarPao()
}

function injetarPao(){
    console.log("preparando para injetar pão")
   console.log("finalizado")
}*/

//========================================================

/*main();

function main() {
  getData();
  checkVAlue();
  sendDataBse();
}

function getData() {
  console.log("preparando dados do usuário");
}

function checkVAlue() {
  console.log("validando dados");
}

function sendDataBse() {
  console.log("cadastrando dados");
}*/


//=====================================================
//Bando de Dados simulado
const bancoDeDados = {
    usuario: "max",
    senha: "1234"
};

function dadosusuario(usuarioDigitado, senhaDigitada) {

    if (
        usuarioDigitado === bancoDeDados.usuario &&
        senhaDigitada === bancoDeDados.senha
    ) {
        console.log("Login autorizado");
    } else {
        console.log("Usuário ou senha inválidos");
    }
}
//Usuário insere os dados
dadosUsuario("max", "1234");