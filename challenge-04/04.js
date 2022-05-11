/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

let carro = {
  marca: 'fiat',
  modelo: 'uno',
  placa: 'KDDI',
  ano: 2020,
  cor: 'azul',
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0,

}
/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = (cor) => {
 carro.cor = cor;
}
/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*//*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = () => {
  return carro.cor;
}
/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterModelo = () => {
  return carro.modelo;
}
/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = () => {
  return carro.marca;
}
/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = () => {
  return console.log(`Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}`)
}
carro.obterMarcaModelo()

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionarPessoas = (pessoas) => {

 let lugaresNoCarro = pessoas + carro.quantidadePessoas
 let vagas = pessoas + carro.quantidadePessoas //5


if( lugaresNoCarro > 5 ){
 console.log("O carro esta lotado")
}
else if ( lugaresNoCarro >= 10 ) {
  return console.log(`Só cabem mais ${vagas} pessoas!`)
}
else {
  carro.quantidadePessoas = pessoas+ carro.quantidadePessoas
  return console.log(`Já temos ${vagas} no carro`)
}


}
carro.adicionarPessoas(3)
carro.adicionarPessoas(1)
carro.adicionarPessoas(3)
