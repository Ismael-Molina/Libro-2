//sin asignar valor (solo se le asigna uno)
var color;
(function (color) {
    color[color["rojo"] = 0] = "rojo";
    color[color["verde"] = 1] = "verde";
    color[color["negro"] = 2] = "negro";
    color[color["azul"] = 3] = "azul";
    color[color["blanco"] = 4] = "blanco";
})(color || (color = {}));
var c = color.azul;
console.log(c);
