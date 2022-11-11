const path = require('path')

//  Path Absoluto
console.log(path.resolve('teste.txt'))

//  Formar Path
const midFolder = 'relatorios'
const fileName = 'nodejs.txt'

const finalPath = path.join('/', 'arquivos', midFolder, fileName)
console.log(finalPath)