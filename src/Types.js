"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var reactstrap_1 = require("reactstrap");
var Test = function () {
    var nameStr = "이순신";
    var age = 30;
    var isAdult = true;
    var numArr1 = [1, 2, 3, 4, 5];
    var numArr2 = [6, 7, 8, 9, 10];
    var strArr1 = ["봄", "여름", "가을", "겨울"];
    var strArr2 = ["Mon", "Tue", "Wed", "Thu", "Sat", "Sun"];
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(reactstrap_1.Table, null,
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("th", null, "\uC774\uB984"),
                    react_1.default.createElement("th", null, "\uB098\uC774"),
                    react_1.default.createElement("th", null, "\uC131\uC778"))),
            react_1.default.createElement("tbody", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null, nameStr),
                    react_1.default.createElement("td", null, age),
                    react_1.default.createElement("td", null, isAdult ? "성인" : ""))),
            react_1.default.createElement("tfoot", null)),
        react_1.default.createElement(reactstrap_1.Table, null,
            react_1.default.createElement("caption", null, "(1) numArr1/numArr2"),
            react_1.default.createElement("thead", null),
            react_1.default.createElement("tbody", null,
                react_1.default.createElement("tr", null, numArr1.map(function (item, index) { return (react_1.default.createElement("td", null, item)); })),
                react_1.default.createElement("tr", null, numArr2.map(function (item, index) { return (react_1.default.createElement("td", null, item)); }))),
            react_1.default.createElement("tfoot", null)),
        react_1.default.createElement(reactstrap_1.Table, null,
            react_1.default.createElement("caption", null, "(2) strArr1/strArr2"),
            react_1.default.createElement("thead", null),
            react_1.default.createElement("tbody", null,
                react_1.default.createElement("tr", null, strArr1.map(function (item, index) { return (react_1.default.createElement("td", null, item)); })),
                react_1.default.createElement("tr", null, strArr2.map(function (item, index) { return (react_1.default.createElement("td", null, item)); }))),
            react_1.default.createElement("tfoot", null))));
};
exports.default = Test;
