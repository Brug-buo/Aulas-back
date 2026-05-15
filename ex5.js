const readline = require('readline-sync');
let pares = 0;
let impares = 0;
console.log("Digite 10 números inteiros:");

for (let i = 1; i <= 10; i++) {
    let numero = readline.questionInt(`Digite o ${i}o numero: );

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
console.log(`Números pares: ${pares}`);
console.log(`Números ímpares: ${impares}`);
