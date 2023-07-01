"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TupleTest = function () {
    // 학생 정보를 담은 튜플 배열
    var students = [
        ["Alice", 22, true],
        ["Bob", 20, false],
        ["Carol", 21, true]
    ];
    // 튜플 배열을 순회하면서 학생 정보 출력
    students.forEach(function (_a) {
        var name = _a[0], age = _a[1], isMale = _a[2];
        console.log("Name: ".concat(name, ", Age: ").concat(age, ", Gender: ").concat(isMale ? 'Male' : 'Female'));
    });
};
exports.default = TupleTest;
