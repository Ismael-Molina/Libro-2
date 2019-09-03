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
var point = /** @class */ (function () {
    function point(x, y) {
        this.x = x;
        this.y = y;
    }
    point.prototype.add = function (point) {
        return new point(this.x + point.x, this.y + point.y);
    };
    return point;
}());
var point3d = /** @class */ (function (_super) {
    __extends(point3d, _super);
    function point3d(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    point3d.prototype.add = function (point) {
        var point2d = _super.prototype.add.call(this, point);
        return new point3d(point2d.x, point2d.y, this.z + point.z);
    };
    return point3d;
}(point));
