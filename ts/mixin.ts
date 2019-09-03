class disposable{
    isDisposed: boolean;
    dispose(){  ;
        this.isDisposed = true;
    }
}
//activacion del mixin
class activatable{
    isActive: boolean;
    activate(){
        this.isActive = true;
    }
    desactive(){
        this.isActive = false;
    }
}
class SmartObject implements disposable, activatable {
    constructor(){
        setInterval(() => console.log(this.isActive + ": " + this.isDisposed),500);
    }
    interract(){
        this.activate();
    }
    isDisposed: boolean = false;
    dispose: () => void;
    isActive:boolean = false;
    activate: () => void;
    desactive: () => void;
}
applyMixins(SmartObject, [disposable,activatable]);
let smartobj = new SmartObject;
setTimeout(() => smartobj.interract(),1000);
function applyMixins(derivedCtor: any, baseCtor:ant[]){
    baseCtor.forEach(baseCtor =>{
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name]
        });
    });
}