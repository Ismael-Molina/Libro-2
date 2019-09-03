var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var animal = /** @class */ (function () {
    function animal(thename) {
        this.name = thename;
    }
    animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("$(this.name) moved $(distanceInMeters)m.");
    };
    return animal;
}());
var snake = /** @class */ (function (_super) {
    __extends(snake, _super);
    function snake(name) {
        return _super.call(this, name) || this;
    }
    snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("moverse");
    };
    return snake;
}(animal));
var rhino = /** @class */ (function (_super) {
    __extends(rhino, _super);
    function rhino(name) {
        return _super.call(this, name) || this;
    }
    rhino.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 10; }
        console.log("moverse");
    };
    return rhino;
}(animal));
var array = [new rhino('rhinoceronte'), new snake('serpiente')];
console.log(array);
