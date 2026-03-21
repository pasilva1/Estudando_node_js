//// bloco de código reutilizavel
//function saudacao(nome){ //nome é o paramentro da funçõa saudação
//    console.log('Olá,', nome)
//}

const saudacao = (nome) => {
    console.log('Vida longa e próspera, ', nome)
}

saudacao('Patrick') // é o arqumento


function calculadoraDobroDeUm(numero) {
    return numero * 2
}

const numeroDobrado = calculadoraDobroDeUm(4)
console.log('O dobro de 4 é:' , numeroDobrado)