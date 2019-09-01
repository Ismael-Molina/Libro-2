//desestructuracion de objetos
var obj = {x: 1,y: 2,z: 3};
console.log(obj.y);

// o tambien
var {x,y,z} = obj;
console.log(x);

//desestructuracion de arrays
var array = [1,2,3];
console.log(array[0]);

//p tambien
var  [x,y,z] = array;
console.log(x);

//desestructuracion de arrays con estructuracion
var array2 = [1,2,3,4];
var [x, y, ...rest] = array2; 
console.log(x,y,rest);

