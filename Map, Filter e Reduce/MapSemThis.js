//arr = argumnetos a serem passados .
// 1 - função MapSemThis recebe um argumento.
// 2 - retorna o argumento e recebe um map que é armazenado na função que contém (item).
// 3 - retorna o (item) e o multiplica por 2.
// 4- a const (nums) recebe valores a serem usados na multiplicação.
// 5- console.log mostra a função MapSemThis mandando os nums como itens.

function MapSemThis (arr){
   return arr.map (function(item){
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];

console.log(MapSemThis(nums));

