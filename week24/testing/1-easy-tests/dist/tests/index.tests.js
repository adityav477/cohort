"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const __1 = require("..");
(0, globals_1.describe)("sum", () => {
    (0, globals_1.it)("the sum of two positive numbers", () => {
        const ans = (0, __1.sum)(2, 3);
        (0, globals_1.expect)(ans).toBe(5);
    });
});
