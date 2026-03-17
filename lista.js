
const listaDeNomes = [
    'Patrick',
    'Yasmin',
    'Giovanna',
    'Katarynne'
]
//console.log(listaDeNomes)
//console.log(listaDeNomes[0])
//console.log('Primeiro nome' ,listaDeNomes[0])
//console.log(listaDeNomes.length)
//console.log('Tamanho do Array', listaDeNomes.length, 'posições')
//listaDeNomes.push('Emprego')
//console.log(listaDeNomes.length)
//console.log(listaDeNomes[listaDeNomes.length -1])

//listaDeNomes.splice(2,1)
//console.log(listaDeNomes)

for(let i = 0; i <listaDeNomes.length; i++) { // usando for
    console.log('indice: ', i)
    console.log(listaDeNomes[i])
}

console.log('Usando forEach:')

listaDeNomes.forEach((valor, indice) => { // usando forEach
    console.log('Índice: ', indice, valor)
})

for (const nome of listaDeNomes) { // usando forof
    console.log('Lista da vez: ', nome)
}