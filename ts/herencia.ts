class animal{
    name: string;
    constructor(thename: string){this.name = thename;}
    move(distanceInMeters: number = 0){
        console.log(`$(this.name) moved $(distanceInMeters)m.`);
    }
}
class snake extends animal{
    constructor (name:string){super(name);}
    move(distanceInMeters = 5){
        console.log("moverse");
    }
}
class rhino extends animal{
    constructor (name:string){super(name);}
    move(distanceInMeters = 10){
        console.log("moverse");
    }
}
let array: animal[] = [new rhino('rhinoceronte'),new snake('serpiente')];
console.log(array);