"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var reactstrap_1 = require("reactstrap");
var sweetalert2_1 = __importDefault(require("sweetalert2"));
var Bmw = /** @class */ (function () {
    function Bmw(color, wheels) {
        this.color = color;
        this.wheels = wheels;
    }
    Bmw.prototype.start = function () {
        //console.log(" is running.");
        Sweetalert_start();
    };
    return Bmw;
}());
var Sweetalert_stop = function () {
    sweetalert2_1.default.fire({
        text: 'stop!!',
        icon: 'warning',
        showConfirmButton: false,
        timer: 2000
    });
};
var Sweetalert_start = function () {
    sweetalert2_1.default.fire({
        text: 'run!!',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
    });
};
var InterfaceTest3 = function () {
    var bmw = new Bmw("Blue", 4);
    var benz = {
        name: "Benz",
        door: 5,
        stop: function () {
            //console.log("stop");
            Sweetalert_stop();
        },
        color: "black",
        wheels: 4,
        start: function () {
            //console.log(" is running.");
            Sweetalert_start();
        }
    };
    var handleBmwStart = function () {
        bmw.start();
    };
    var handleBenzStart = function () {
        benz.start();
    };
    var handleBenzStop = function () {
        benz.stop();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(reactstrap_1.Table, null,
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null, "Name"),
                    react_1.default.createElement("td", null, "Color"),
                    react_1.default.createElement("td", null, "Door"),
                    react_1.default.createElement("td", null, "Wheels"),
                    react_1.default.createElement("td", null, "Start"),
                    react_1.default.createElement("td", null, "Stop"))),
            react_1.default.createElement("tbody", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null, bmw.constructor.name),
                    react_1.default.createElement("td", null, bmw.color),
                    react_1.default.createElement("td", null),
                    react_1.default.createElement("td", null, bmw.wheels),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement(reactstrap_1.Button, { color: "success", onClick: handleBmwStart }, "Start")),
                    react_1.default.createElement("td", null)),
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null, benz.name),
                    react_1.default.createElement("td", null, benz.color),
                    react_1.default.createElement("td", null, benz.door),
                    react_1.default.createElement("td", null, benz.wheels),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement(reactstrap_1.Button, { color: "success", onClick: handleBenzStart }, "Start")),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement(reactstrap_1.Button, { color: "warning", onClick: handleBenzStop }, "Stop")))),
            react_1.default.createElement("tfoot", null))));
};
exports.default = InterfaceTest3;
