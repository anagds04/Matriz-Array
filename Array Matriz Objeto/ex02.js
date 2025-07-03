/*2- Modifique o valor da posição [1][2] de uma matriz para 99. E exiba todos os valores resultantes.
let matriz = [
[10, 20, 30],
[40, 50, 60]*/

let matriz = [
    [10, 20, 30],
    [40, 50, 60]
];

matriz [1][2] = 99;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}
