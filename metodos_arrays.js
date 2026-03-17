const numeros = [1,  2, 3, 4, 5, 6, 7, 8, 9, 10]

const numeroPares = numeros.filter((numeros) => {
    return numeros % 2 === 0
})

const numeroImares = numeros.filter((numeros) => {
    return numeros % 2 === 1
})

console.log('Todos os números ',numeros)

console.log('Números pares ', numeroPares)

console.log('Números pares ', numeroImares)