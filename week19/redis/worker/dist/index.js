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
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const client = (0, redis_1.createClient)();
function processSubmissions(submissions) {
    return __awaiter(this, void 0, void 0, function* () {
        const { problemId, code, language } = JSON.parse(submissions);
        console.log(`Processing submission for problemId ${problemId}...`);
        console.log(`Code: ${code}`);
        console.log(`Language: ${language}`);
        yield new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Finished processing submission for problemId ${problemId}.`);
    });
}
startRedis();
function startRedis() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("worker connected to client");
            while (1) {
                try {
                    const submissions = yield client.brPop("problems", 0);
                    // @ts-ignore
                    processSubmissions(submissions.element);
                }
                catch (error) {
                    console.log("error while doing submissions", error);
                }
            }
        }
        catch (error) {
            console.log("Error in starting redis");
        }
    });
}
