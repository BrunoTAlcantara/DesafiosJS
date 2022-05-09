
let myvar = {}
let pessoa = {
  nome:'Bruno',
  sobrenome:'Theodoro',
  sexo:'M',
  idade:18,
  altura:1.7,
  peso:60,
  andando:false,
  caminhouQuantosMetros:0,
}
 pessoa.fazeraniversario =  () => {
  pessoa.idade++
}
console.log(pessoa)
pessoa.fazeraniversario()

console.log(pessoa.idade)
