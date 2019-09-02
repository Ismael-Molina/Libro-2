var inicio = /** @class */ (function () {
    function inicio(text) {
        this.text = text;
    }
    inicio.prototype.principal = function () {
        console.log(this.text);
        return 0;
    };
    return inicio;
}());
var s = new inicio("hola m undo");
s.principal();
