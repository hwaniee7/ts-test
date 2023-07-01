"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var reactstrap_1 = require("reactstrap");
var InterfaceTest1 = function () {
    var user = {
        name: "홍길동",
        age: 25,
        gender: "남성",
        isAdult: true,
        birthday: new Date("1998-06-20"),
        rank: "사원"
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(reactstrap_1.Table, null,
            react_1.default.createElement("thead", null),
            react_1.default.createElement("tbody", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null, user.name),
                    react_1.default.createElement("td", null, user.age),
                    react_1.default.createElement("td", null, user.gender),
                    react_1.default.createElement("td", null, user.isAdult ? "성인" : ""),
                    react_1.default.createElement("td", null, user.isAdult),
                    react_1.default.createElement("td", null, user.rank))),
            react_1.default.createElement("tfoot", null))));
};
exports.default = InterfaceTest1;
