const readline = require('readline-sync');
const secreto = 42;
let tentativas = 0;

console.log("Jogo de adivinhação");
console.log("Adivinhe o número secreto");

while (true) {
    let chute = readline.questionInt("Digite um número: ");
    tentativas++;

    if (chute === secreto) {
        console.log(`\nParabéns! Você acertou em ${tentativas} tentativas.`);
        break;
    } else if (secreto > chute) {
        console.log("O número secreto é maior que " + chute);
    } else {
        console.log("O número secreto é menor que " + chute);
    }
}
