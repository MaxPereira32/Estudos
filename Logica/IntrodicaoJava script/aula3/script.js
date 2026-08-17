
/* Boolean

var vOuF = false;
console.log(typeof (vOuF)) 
*/

/* nmber*/

/*
forEach() - itera um array
push() - add item no final de uma array
pop() - remove item no final de uma array
shift() - remove item no inicio de uma array
unshift() - add item no inicio de uma array
indexOf() - retorna o índece de uma valor
splice() 0 remove ou substitui um item pelo índece
slice() rettorna uma parte de uma array existente
*/

let array  = [`string`, 1, true,['array1'], ['array2'], ['array3'], ['array4']]
/*console.log(array[3]);*/


/*fotEach

array.forEach(function(item, indece){console.log(item, indece)})*/

/*push*/

/*array.push('novo item')
console.log(array)*/

/*pop*/
/*array.pop();
console.log(array)*/

/* shift*/
/*array.shift();
console.log(array);*/

/*unshift*/
/*array.unshift('novo item');
console.log(array);*/

/*indexOf*/
/*console.log(array.indexOf(true))*/

/*  splice*/
/*array.splice(0, 3)
console.log(array)*/

/*slice*/
/*let novoArray = array.slice(0, 3)
console.log(novoArray)*/

/*let object = {string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'}}
/*console.log(object.objectInterno);*/
/*
var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);*/

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);

