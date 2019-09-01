function Persona(años) {
    this.años = años;
    this.envejecer = () => {
        this.años++;
    }
}
var persona = new Persona(1);
setTimeout(persona.envejecer,1000);
setTimeout(function(){console.log(persona.años);},2000);
