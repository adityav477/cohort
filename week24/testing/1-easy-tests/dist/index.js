"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/sum", (req, res) => {
    const { a, b } = req.body;
    const result = a + b;
    res.status(200).json({ answer: result });
});
exports.default = app;
