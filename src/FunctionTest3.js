"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function join(name, age) {
    if (typeof age === 'number') {
        return {
            name: name,
            age: age,
        };
    }
    else {
        return "나이는 숫자로 입력해주세요.";
    }
}
var FunctionTest3 = function () {
    var sam = join("Sam", 30);
    var jane = join("Jane", "30");
    console.log(sam);
    console.log(jane);
};
exports.default = FunctionTest3;
