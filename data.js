const agora = new Date()

console.log(agora)

console.log('Ano: ', agora.getFullYear())
console.log('Mês 0-11: ', agora.getMonth())
console.log('Hora: ', agora.getHours())
console.log('Minutos: ', agora.getMinutes())
//console.log('Ano: ', agora.getTime())
console.log('Dia do mês: ', agora.getDate())

const nascimento = new Date(1985, 5, 3)
console.log(nascimento)

console.log('Data formatada (BR): ', nascimento.toLocaleDateString('pt-BR'))
