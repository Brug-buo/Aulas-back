const input = require('readline-sync');

const num1 = Number(input.question('Digite o primeiro numero: '));
const num2 = Number(input.question('Digite o segundo numero: '));

console.log(`Soma: ${num1 + num2}`);
console.log(`Subtracao: ${num1 - num2}`);
console.log(`Multiplicacao: ${num1 * num2}`);

if (num2 === 0) {
    console.log("Erro: Não é possível dividir por zero.");
} else {
    console.log(`Divisao: ${num1 / num2}`);
}
