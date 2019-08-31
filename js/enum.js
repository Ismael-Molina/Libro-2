var direccion;
(function (direccion) {
    direccion[direccion["arriba"] = 1] = "arriba";
    direccion[direccion["abajo"] = "abajp".length] = "abajo";
    direccion[direccion["izq"] = 2] = "izq";
    direccion[direccion["der"] = 4] = "der";
})(direccion || (direccion = {}));
var a = direccion.arriba;
console.log(a);
