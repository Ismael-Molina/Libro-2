//sin fat arrow
class base{
    log() {console.log('hola mundo');}
}
class hijo extends base{
    logWorld(){super.log()};
}
//con fat arrow
class base2{
    log = () => {console.log('hola mundo');}
}
class hijo2 extends base2{
    logWorld(){this.log()};
}