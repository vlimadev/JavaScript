function validaArray (array, numero){
try{

    if (!array && !numero) throw new ReferenceError("Envie os parâmetros");

    if(typeof array !== 'object') throw new TypeError ("Array precisa ser do tipo object");

    if(typeof array !== 'number') throw new TypeError ("Array precisa ser do tipo  number");

    if(array.length !== numero) throw new RangeError ("Tamanho inválio!");


    return array;
}

catch (e) {
 
    if (e instanceof ReferenceError){
        console.log("este erro é um ReferenceError!");
        console.log(e.message);     
    } else if (e instanceof TypeError){
        console.log("este erro é um TypeError!");
        console.log(e.message);        
    } else if (e instanceof RangeError){
        console.log("este erro é um RangeError!");
        console.log(e.message); 
    } else {
        console.log("Ocorreu um erro inesperado:"+ e);
        console.log(e.message); 
    }
}
}

// console.log(validaArray()); // Chama RefenceError
// console.log(validaArray([], 'a')); // Chama TypeError
console.log(validaArray([3], 1)); 
//console.log(validaArray());