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
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/sum", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { a, b } = req.body;
    if (a > 1000000 || b > 1000000) {
        return res.status(411).json({
            message: "Huge Number not supported "
        });
    }
    const result = a + b;
    const request = yield db_1.prismaClient.request.create({
        data: {
            a: a,
            b: b,
            answer: result,
            type: "ADD"
        }
    });
    res.json({ answer: result, id: request.id });
}));
exports.default = app;
