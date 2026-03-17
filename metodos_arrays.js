const numeros = [1,  2, 3, 4, 5, 6, 7, 8, 9, 10]

const numeroPares = numeros.filter((numeros) => {
    return numeros % 2 === 0
})

console.log('Todos os números ',numeros)

console.log('Números pares ', numeroPares)