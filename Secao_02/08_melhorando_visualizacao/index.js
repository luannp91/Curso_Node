const chalk = require('chalk')

const nota = 6

if (nota >= 7) {
    console.log(chalk.green.bold('Parabéns! Você foi aprovado :)'))
} else {
    console.log(chalk.bgRed.bold("Você está reprovado :("));
}