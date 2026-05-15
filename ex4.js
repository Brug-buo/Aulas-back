const readline = require('readline-sync');

let numero = parseInt(readline.question('Qual tabuada que deseja? '));
console.log(`\nTabuada do ${numero}:`);

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
