

 "use strict";
 const hora = 2;

 let periodo ;
 
 if(hora >= 0 && hora < 6) {
    periodo = 'Madrugada';
 } else if (hora >= 6 && hora < 12){
    periodo = 'Manhã';
 } else if (hora  >= 12 && hora < 18){
    periodo = 'Tarde';
 } else {
    periodo = 'Noite';
 }

console.log(`O período é ${periodo}`)