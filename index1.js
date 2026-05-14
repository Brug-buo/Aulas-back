const input = require('readline-sync');

const nome = input.question('Qual o seu nome? ');
const idade = input.question('Qual a sua idade? ');
const cidade = input.question('Qual a sua cidade? ');

console.log(`Olá! Meu nome é ${nome}, tenho ${idade} anos e sou de ${cidade}.`);