// Entre 9 e 10: excelente
// entre 7 e 8 bom
// entre 4 e 6 médio
// entre 0 e 3 ruim

//const nota = 1
const nota = 7

if (nota >= 9) {
    console.log('Sua nota é Excelente !')
} else if(nota >= 7 && nota <= 8){
    console.log('Sua nota é Boa')
} else if(nota >= 4 && nota <= 6){
    console.log('Sua nota é média')
} else {
    console.log('Sua nota é Ruim, você precisa estudar mais!')
}