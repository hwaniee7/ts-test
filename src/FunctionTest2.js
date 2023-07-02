"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sam = { name: 'Sam' };
function showName1() {
    console.log(this.name);
}
;
var a = showName1.bind(Sam);
function showName2(age, gender) {
    console.log(this.name, age, gender);
}
var b = showName2.bind(Sam);
var Jack = { name: 'Jack' };
var showName3 = function () {
    console.log(Jack.name);
};
var FunctionTest2 = function () {
    a();
    b(30, 'm');
    showName3();
};
exports.default = FunctionTest2;
