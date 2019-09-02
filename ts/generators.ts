function getFirstName(){
    setTimeout(function(){
        gen.next("darkar")
    },1000);
}
function getSecondName(){
    setTimeout(function(){
        gen.next("ML")
    },1000);
}
function* hola(){
    var a = yield getFirstName();
    var b = yield getSecondName();
    console.log(a,b);
}
var gen =hola();
gen.next();