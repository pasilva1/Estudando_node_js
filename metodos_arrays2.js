const numeros = [1,  2, 3, 4, 5, 6, 7, 8, 9, 10]

const numeroPares = numeros.filter((numeros) => {
    return numeros % 2 === 0
})

const numeroImpares1 = numeros.filter((numeros) => {
    return numeros % 2 === 1
})

const numeroImpares2 = numeros.filter((numeros) => {
    return numeros % 2 != 0
})

console.log('Todos os números ',numeros)
console.log('Números pares ', numeroPares)
console.log('Números Ímpares 1 ', numeroImpares1)
console.log('Números Ímpares 2 ', numeroImpares2)