"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./style.css");
var LoadingProcess = function (_a) {
    var children = _a.children, position = _a.position, scale = _a.scale, backgroundColor = _a.backgroundColor, iconColor = _a.iconColor;
    var style = { position: position };
    var backgroundStyle = { backgroundColor: backgroundColor };
    var iconStyle = { backgroundColor: iconColor };
    var iconScale = { transform: "scale(".concat(scale, ")") };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'lesca-loading', style: style }, { children: [(0, jsx_runtime_1.jsx)("div", { className: 'background', style: backgroundStyle }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'content', style: iconScale }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'ico' }, { children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(function (e) { return ((0, jsx_runtime_1.jsx)("div", { style: iconStyle }, e)); }) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'text' }, { children: children }))] }))] })));
};
LoadingProcess.defaultProps = {
    position: 'fixed',
    scale: 1,
    backgroundColor: 'rgba(0,0,0,.8)',
    iconColor: '#fff',
};
exports.default = LoadingProcess;
