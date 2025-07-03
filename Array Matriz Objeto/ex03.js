/*3- Crie um array de objetos representando 3 alunos, cada um com nome e
nota. Percorra e imprima:
"Aluno: [nome] - Nota: [nota]"
let alunos = [
{ nome: "Ana", nota: 8.5 },
{ nome: "Bruno", nota: 6.0 },
{ nome: "Carlos", nota: 9.0 }
];*/

let alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 6.0 },
    { nome: "Carlos", nota: 9.0 }
];

console.log(alunos[1].nome);  
console.log(alunos[2].nota);  

for (let i = 0; i < alunos.length; i++) {
    console.log("nome:", alunos[i].nome);
    console.log("nota:", alunos[i].nota);  
}