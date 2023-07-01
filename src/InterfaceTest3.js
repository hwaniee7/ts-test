"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bmw = /** @class */ (function () {
    function Bmw(color, wheels) {
        this.color = color;
        this.wheels = wheels;
    }
    Bmw.prototype.start = function () {
        console.log(" is running.");
    };
    return Bmw;
}());
var InterfaceTest3 = function () {
    var car = new Bmw("Blue", 4);
    console.log("name: " + car.constructor.name + ", color: " + car.color + ", wheels: " + car.wheels);
    car.start();
};
exports.default = InterfaceTest3;
