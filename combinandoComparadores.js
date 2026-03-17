const idade =  17
const maiorIdade = idade >= 18
const possuiCNH = false

const podeDirigir = maiorIdade && possuiCNH // AND

console.log('Pode dirigir? ', podeDirigir)

const podeViajarSozinha = maiorIdade || possuiCNH // OR

console.log('Pode viajar sozinha? ', podeViajarSozinha)

const precisaAcompanhante = !maiorIdade

console.log('Precisa de acompanhante? ', precisaAcompanhante)

//AND &&
// OR ||
// NOT !