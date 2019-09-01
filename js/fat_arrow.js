function Persona(años) {
    var _this = this;
    this.años = años;
    this.envejecer = function () {
        _this.años++;
    };
}
var persona = new Persona(1);
setTimeout(persona.envejecer, 1000);
setTimeout(function () { console.log(persona.años); }, 2000);
