// contar quantos numero pares e quantos numero ímpare tem entre 0 e 100

let totalNumerosPares = 0
let totalNumeroImpares = 0


for (let contador = 0; contador <= 100; contador++) {
    if(contador % 2 == 0) {
        totalNumerosPares++
    } else {
        totalNumeroImpares++
    } 
}

console.log('Total de números pares' , totalNumerosPares)
console.log('Total de números ímpares' , totalNumeroImpares)