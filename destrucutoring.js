const pessoa = {
    nome: 'Nathália',
    idade: 17,
    profissao: 'Estudante'
}
//console.log(pessoa.nome)
//console.log(pessoa.idade)

const { nome, idade } = pessoa

console.log(pessoa.nome)
console.log(pessoa.idade)

function saudacao(pessoa) {
    console.log('Olá', pessoa.nome)
}

saudacao(pessoa)