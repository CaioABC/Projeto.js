//Atividade Básica.

// const arr = [10, 15, 20, 25, 30];
// const nums2 = arr.filter(numero => numero >= 20);
// console.log(nums2);

// const palavras = ["js", "html"];
// const maiusculas = palavras.map(palavra => palavra.toUpperCase());
// console.log(maiusculas);

//Atividade Média.

// const usuarios = [
//   {id: 1, nome: "Caio" },
//   {id: 3, nome: "Ana"},
//   {id: 2, nome: "Bruno"},
// ];
// const usuario1 = usuarios.find(usuario => usuario.id === 1);
// console.log(usuario1);

// const produtos = [
//   { nome: "Camiseta", preco: 12 },
//   { nome: "Tênis", preco: 35 },
// ];
// const nomes = produtos.filter(p => p.preco > 20);
// const nomesCaros = nomes.map(p => p.nome);

// console.log(nomes);

//Atividade Avançada.

// const itens = [{ preco: 10 }, { preco: 20 }, { preco: 5 }];
// const precoTotal = itens.reduce((acumulador, itemAtual) => {
//   acumulador + itemAtual.preco;
// }, 0);

// console.log(precoTotal);

// const items = [
//   { nome: "Compasso", categoria: "papel", preco: 12 },
//   { nome: "Caderno", categoria: "papel", preco: 15 },
//   { nome: "Maçã", categoria: "alimento", preco: 5},
// ];

// const total = items.reduce((acc, it) => {
//   const cat = it.categoria;
//   if (!acc[cat]) acc[cat] = 0;
//   acc[cat] += it.preco;
//   return acc;
// }, {});
// console.log(total);


//Atividade Extra.

// const produtos = [
//     { id: 1, nome: "Notebook", preco: 3500 },
//     { id: 2, nome: "Mouse", preco: 150 },
//     { id: 3, nome: "Teclado", preco: 200 },
//     { id: 4, nome: "Monitor", preco: 1200 }
// ];

// const precoMaiorQue500 = produtos.filter(numero => numero.preco > 500);
// console.log(precoMaiorQue500)

// const m = produtos.find(p => p.nome === "Mouse");
// console.log(m)

// const nomesProdutos = produtos.map(produtos => produtos.nome);
// console.log(nomesProdutos)

// const totalPreco = produtos.reduce((acc, produto) => {
//     return acc + produto.preco
// }, 0);

// console.log(totalPreco)