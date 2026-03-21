const pessoa = {
    nome: 'Ana',
    idade: 26,
    temCNH: true
}

pessoa.sobrenome = 'Paula'

console.log('Nome: ', pessoa.nome)
console.log('Sobrenome: ', pessoa.sobrenome)

const livro = {
    titulo: 'Desafio',
    autor:'Roberto Ataíde',
    paginas: 310
}

livro.publicado = true
livro.idiomas = [
    'ingles', 'portugues', 'espanhol'
]

livro.idiomas.push('Mandarim')
livro.idiomas.push('Russo')

console.log('Título: ', livro.titulo)
console.log('Autor: ', livro.autor)
console.log('Publicado: ', livro.publicado)
console.log('Idiomas: ', livro.idiomas)
