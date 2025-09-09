//Filter, Map, Find e Reduce

const compras = [
  {nome: "Leite", preco: 5},
  {nome: "Pão", preco: 8},
  {nome: "Manteiga", preco: 12},
]
const valorTotal = compras.reduce((acumulador, itemAtual) => {
  return acumulador + itemAtual.preco
}, 0)

console.log(valorTotal)