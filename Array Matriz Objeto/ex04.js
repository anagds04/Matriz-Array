/*4- Some todas as notas dos alunos do array de objetos e calcule a média.
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

let somaNotas = 0 ;
for (let i = 0; i <alunos.length; i++){
    somaNotas += alunos[i].nota; 
}

let media = somaNotas/alunos.length;
console.log(`Média das notas: ${media} `);

/* outra maneira de fazer 

let alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 6.0 },
    { nome: "Carlos", nota: 9.0 }
];

somaNotas = alunos.reduce((acumulador, aluno) => acumulador + aluno.nota, 0);

media = somaNotas / alunos.length

console.log(somaNotas)
console.log(media) */