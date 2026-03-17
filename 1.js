console.log('====================')
console.log('1. Verificação de maioridade')

let idade = 17

let maiorIdade = idade >= 18

console.log('A idade é: ', idade)
console.log(maiorIdade)
console.log('====================')

//console.log('====================')
console.log('2. Situação do aluno')

let nota1 = 10
let nota2 = 10

let media =  (nota1 + nota2) / 2
console.log('A média é: ', media)
console.log('A média é maior ou igual a 7? ', media >=7)

console.log('3. Simulação de troco')

let valorCompra = 35.90
let valorPago = 50

let troco = valorPago - valorCompra
console.log('Valor da Compra ', valorCompra)
console.log('Valor Pago ', valorPago)
//console.log('O troco será ', troco)
console.log('O troco será ', troco.toFixed(2))

console.log('4. Validação de senha')

//let senha1 = '2150300305'
//let senha2 = '2727272727'
//
//let compara = senha1 === senha2
//console.log('Senha iguais ? ',compara)
let senha1 = '123456'
let senha2 = '1234560'

let senhaIgual = senha1 === senha2

if (senhaIgual) {
    console.log('Senha confirmada ✅')
} else {
    console.log('As senhas não são iguais ❌')
}
console.log('5. Controle de faltas')

let totalAulas = 10
let faltas = 2

let limiteFaltas = totalAulas * 0.25

console.log('Total de aulas ', totalAulas)
console.log('Quantidade de FaltasTotal de aulas ', faltas)
console.log('Limite de Faltas ', limiteFaltas)

// Verifica se ultrapassou o limite
let ultrapassouLimite = faltas > limiteFaltas

console.log('As faltas ultrapassaram o limite permitido?', ultrapassouLimite)

console.log('6. Verificação de login')

let temLogin = false
let temSenha = false

let acesso = temLogin && temSenha

console.log('Pode acessar?', acesso)

