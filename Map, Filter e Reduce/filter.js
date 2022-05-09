// 1. a function filtraPares recebe um array (arr) e retorna um array filtrado com os parametros da função callback
// 2. a função callback recebe o item com os parametros.
// 3. meuArray recebe os números para filtragem.


function filtraPares(arr) {
    return arr.filter(callback) 
}

function callback(item){
    return item % 2 === 0;
    //return item % 2 !== 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));