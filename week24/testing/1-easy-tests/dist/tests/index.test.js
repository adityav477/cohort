"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const __1 = __importDefault(require(".."));
const supertest_1 = __importDefault(require("supertest"));
(0, globals_1.describe)("Testing the sum function", () => {
    (0, globals_1.it)("Sum of two numbers", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(__1.default).post("/sum").send({
            a: 1,
            b: 2
        });
        (0, globals_1.expect)(res.statusCode).toBe(200);
        (0, globals_1.expect)(res.body.answer).toBe(3);
    }));
});
