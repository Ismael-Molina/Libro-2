//sin asignar valor (solo se le asigna uno)
var color;
(function (color) {
    color[color["rojo"] = 1] = "rojo";
    color[color["verde"] = 2] = "verde";
    color[color["negro"] = 3] = "negro";
    color[color["azul"] = 4] = "azul";
    color[color["blanco"] = 5] = "blanco";
})(color || (color = {}));
var nomcolor = color[4];
console.log(nomcolor);
