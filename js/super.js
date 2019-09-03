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
//sin fat arrow
var base = /** @class */ (function () {
    function base() {
    }
    base.prototype.log = function () { console.log('hola mundo'); };
    return base;
}());
var hijo = /** @class */ (function (_super) {
    __extends(hijo, _super);
    function hijo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hijo.prototype.logWorld = function () { _super.prototype.log.call(this); };
    ;
    return hijo;
}(base));
//con fat arrow
var base2 = /** @class */ (function () {
    function base2() {
        this.log = function () { console.log('hola mundo'); };
    }
    return base2;
}());
var hijo2 = /** @class */ (function (_super) {
    __extends(hijo2, _super);
    function hijo2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hijo2.prototype.logWorld = function () { this.log(); };
    ;
    return hijo2;
}(base2));
