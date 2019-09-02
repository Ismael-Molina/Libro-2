function* infinito() {
    var i = 0;
    while(true){
        yield i++;
    }
} 
var iterador = infinito();
while(true){
    console.log(iterador.next());
}