const input = require('readline-sync')

const num1 = Number(input.question('Digite o 1° número: '))
const num2 = Number(input.question('Digite o 2° número: '))

console.log(`Soma: ${num1 + num2}`)
console.log(`Subtração: ${num1 - num2}`)
console.log(`Multiplição: ${num1 * num2}`)

if (num2 === 0) {
    console.log("Erro")
} else {
    console.log(`Divisão: ${num1 / num2}`)
}
