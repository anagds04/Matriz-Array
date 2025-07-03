/* 5- Crie um array de objetos com produtos (nome, preco). Percorra e exiba
apenas os produtos com preço maior que 50.
let produtos = [
{ nome: "Camisa", preco: 45 },
{ nome: "Calça", preco: 100 },
{ nome: "Boné", preco: 30 },
{ nome: "Jaqueta", preco: 150 }
];*/

let produtos = [
    { nome: "Camisa", preco: 45 },
    { nome: "Calça", preco: 100 },
    { nome: "Boné", preco: 30 },
    { nome: "Jaqueta", preco: 150 }
];

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].preco > 50) {
    console.log("nome:" , produtos[i].nome);
    console.log("preço:", produtos[i].preco);
    }
}