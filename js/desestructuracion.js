//desestructuracion de objetos
var obj = { x: 1, y: 2, z: 3 };
console.log(obj.y);
// o tambien
var x = obj.x, y = obj.y, z = obj.z;
console.log(x);
//desestructuracion de arrays
var array = [1, 2, 3];
console.log(array[0]);
//p tambien
var x = array[0], y = array[1], z = array[2];
console.log(x);
//desestructuracion de arrays con estructuracion
var array2 = [1, 2, 3, 4];
var x = array2[0], y = array2[1], rest = array2.slice(2);
console.log(x, y, rest);
