const pessoa = {
    nome: 'Patrick',
    idade: 40,
    profissao: 'Desenvolvedor'
}

const obj = { ...pessoa}

pessoa.idade = 30
pessoa.profissao = 'Desenvolvedor Sênior'

console.log(pessoa)
console.log(obj)
