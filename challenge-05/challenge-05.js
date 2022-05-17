/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
let Myra = ['azul',1,'chocolate','bala','pipoca']
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
  const mofundo = (arr) => {
      return arr
  }

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
console.log (mofundo([1,3,4,5][2]))
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
const fun2 = (arr,num) => {
   return arr[num]

}
console.log(fun2([1,3,4],0))

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
let ar2 =  [1,'coco',function(){},{a:1},null]
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
console.log(fun2(ar2,0))
console.log(fun2(ar2,1))
console.log(fun2(ar2,2))
console.log(fun2(ar2,3))
console.log(fun2(ar2,4))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
const book = (name) => {

  let livros = {
   'livro1':{
      quantidadeDePaginas: 1,
      autor:'autor1',
      editora:'edi1'

    },
    'livro2':{
      quantidadeDePaginas: 2,
      autor:'autor2',
      editora:'edi2'
    },
    'livro3':{
      quantidadeDePaginas: 3,
      autor:'autor3',
      editora:'edi3'}}

    return !name ? livros : livros[name]

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
 console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
console.log("O livro2 tem "+ book('livro2').quantidadeDePaginas + ' paginas')
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log("O livro2 é "+ book('livro2').autor )
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
console.log("O livro2 foi publicado pela editora "+ book('livro2').editora )
