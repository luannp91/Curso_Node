const path = require('path')

const customPath = '/home/estudo/Nodejs/Secao_03/07_atualizando_arquivo/arquivo.txt'

console.log(path.dirname(customPath))
console.log(path.basename(customPath))
console.log(path.extname(customPath))