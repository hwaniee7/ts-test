"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add1(num1, num2) {
    console.log(num1 + num2);
}
function add2(num1, num2) {
    return num1 + num2;
}
function hello(name) {
    return "Hello, ".concat(name || "World!");
}
function hello2(name) {
    if (name === void 0) { name = "Typescript!"; }
    return "Hello, ".concat(name);
}
function hello3(name, age) {
    if (age !== undefined) {
        return "Hello, ".concat(name, ". You're ").concat(age, " years old");
    }
    else {
        return "Hello, ".concat(name);
    }
}
function hello4(age, name) {
    if (age !== undefined) {
        return "Hello, ".concat(name, ". You're ").concat(age, " years old");
    }
    else {
        return "Hello, ".concat(name);
    }
}
function sum() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (result, num) { return result + num; }, 0);
}
var FunctionTest = function () {
    add1(5, 5);
    var a = add2(10, 10);
    console.log(a);
    var sayHello = hello("영환!");
    var sayHelloWorld = hello();
    console.log(sayHello);
    console.log(sayHelloWorld);
    var sayHelloTS = hello2();
    console.log(sayHelloTS);
    console.log(hello3("Sam", 22));
    console.log(hello4(undefined, "Michael"));
    console.log(sum(1, 2, 3, 4));
    console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
    ;
};
exports.default = FunctionTest;
