// 2 - Com let lista = [10, 20, 30, 40], use reduce para somar todos os valores.



let lista = [10, 20, 30, 40];

let somaValores = lista.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(somaValores);