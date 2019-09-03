var disposable = /** @class */ (function () {
    function disposable() {
    }
    disposable.prototype.dispose = function () {
        ;
        this.isDisposed = true;
    };
    return disposable;
}());
//activacion del mixin
var activatable = /** @class */ (function () {
    function activatable() {
    }
    activatable.prototype.activate = function () {
        this.isActive = true;
    };
    activatable.prototype.desactive = function () {
        this.isActive = false;
    };
    return activatable;
}());
var SmartObject = /** @class */ (function () {
    function SmartObject() {
        var _this = this;
        this.isDisposed = false;
        this.isActive = false;
        setInterval(function () { return console.log(_this.isActive + ": " + _this.isDisposed); }, 500);
    }
    SmartObject.prototype.interract = function () {
        this.activate();
    };
    return SmartObject;
}());
applyMixins(SmartObject, [disposable, activatable]);
var smartobj = new SmartObject;
setTimeout(function () { return smartobj.interract(); }, 1000);
function applyMixins(derivedCtor, baseCtor) {
    baseCtor.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
