function* logGenerator(){
    console.log(yield);
    console.log(yield);
    console.log(yield);
}
var gen = logGenerator();
gen.next();
gen.next("abc");
gen.next("hola mundo");