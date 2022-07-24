class Pessoa {

	constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    imprimeNome(nome) {
        console.log(nome);
    }

    imprimeIdade(anoAtual, anoNasc) {
        let date = new Date();
        anoAtual = date.getFullYear();
        anoNasc = 1989;
        console.log(anoAtual - anoNasc)
    }

    imprimeProfissao(profissao){
        console.log(profissao);
    }

}

const pessoa = new Pessoa("diego",32,"Dev")
console.log(pessoa);
pessoa.imprimeNome("Diego")
pessoa.imprimeIdade()
pessoa.imprimeProfissao("Dev")

class Livro {

    constructor(nome, autor, paginas){
        this.nome = nome;
        this.autor = autor;
        this.paginas = paginas;
    }

    imprimeNomeDoLivro(nome){
        console.log(nome)
    }

    imprimeAutor(autor){
        console.log(autor);
    }

    imprimeNumeroDePaginas(paginas){
        console.log(paginas)
    }
}

const livro = new Livro("O conde de monte cristo", "Alexandre Dumas", 1663);
console.log(livro);
livro.imprimeNomeDoLivro(livro.nome);
livro.imprimeAutor(livro.autor);
livro.imprimeNumeroDePaginas(livro.paginas);

