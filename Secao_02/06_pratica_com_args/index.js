const minimist = require('minimist')

//  modulo externo
const args = minimist(process.argv.slice(2))

//  modulo interno
const soma = require('./soma').soma

const a = parseInt(args['a'])
const b = parseInt(args['b'])

soma(a, b)