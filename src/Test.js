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
    var week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(reactstrap_1.Table, null,
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("th", null, "\uC774\uB984"),
                    react_1.default.createElement("th", null, "\uB098\uC774"))),
            react_1.default.createElement("tbody", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null, nameStr),
                    react_1.default.createElement("td", null, age))),
            react_1.default.createElement("tfoot", null)),
        react_1.default.createElement(reactstrap_1.Table, null,
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null, week.map(function (item, index) { return (react_1.default.createElement("td", { key: index }, item)); }))),
            react_1.default.createElement("tbody", null),
            react_1.default.createElement("tfoot", null))));
};
exports.default = Test;
