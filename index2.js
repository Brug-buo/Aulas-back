const input = require('readline-sync')
let soma = 0
for (let i = 1; i <= 5; i++) {
    let nota = Number(input.question(`Digite a nota ${i}: `))
    soma = soma + nota; // Acumula a nota na variável soma
}

let media = soma / 5;
console.log(`Media final: ${media.toFixed(1)}`)

if (media >= 7) {
    console.log("Status: Aprovado")
} else if (media >= 5) {
    console.log("Status: Recuperacao")
} else {
    console.log("Status: Reprovado")
}
