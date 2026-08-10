

class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    
    escrever() {
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`);
    }
    assar(){
        console.log()
    }
}

// Cria uma instância (objeto) da classe
const boloFesta = new formaDeBolo("chocolate", "nutella");
const boloPremium = new formaDeBolo("baunilha", "morango");

// Chama o método para imprimir o resultado
boloFesta.escrever();
boloPremium.escrever();
boloPremium.assar();


//Entregue para o sistema deURI



/*const  saborDaMassa = gets();
const saborRecheio = gets();

class FormaDeBolo {
    constructor(saborDaMassa, saborRecheio) {
        this.saborDaMassa = saborDaMassa;
        this.saborRecheio = saborRecheio;
    }
    
    escrever() {
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`);
    }
}

// Cria uma instância (objeto) da classe
const bolo = new FormaDeBolo(saborDaMassa, saborRecheio);

// Chama o método para imprimir o resultado
bolo.escrever();
*/
