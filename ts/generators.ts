//trtando con excepciones
function* generator(){
    try{
        yield "foo";
        throw Error("Test");
    }
    catch(err){
        console.log(err.message);
    }
}
var iterador = generator();
var foo = iterador.next();
console.log(foo.value);
var foo = iterador.next();