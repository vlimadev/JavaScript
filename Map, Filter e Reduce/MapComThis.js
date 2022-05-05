const maca ={
    value :2,       //quantidade de maças
}

const laranja ={
    value :3,       // quantidade de laranjas
}



//função Map usando This    
function mapComThis (arr, thisArg){   
    return arr.map(function(fruta){
       return fruta * this.value; //pega o item da função e multiplica pelo valor das frutas (this)
    },thisArg);
}

const nums = [1,2]; // números para serem multiplicados pelas frutas


console.log('this -> maçã', mapComThis(nums, maca)); // mostra valores armazenados no momento (nums) e após a multiplicação (fruta)
console.log('this -> laranja', mapComThis(nums, laranja));