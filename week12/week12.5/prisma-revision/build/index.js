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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, password, firstName, lastName, email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const response = await prisma.user.create({
            //   data: {
            //     username,
            //     password,
            //     firstName,
            //     lastName,
            //     email,
            //   }
            // })
            const response = yield prisma.todo.create({
                data: {
                    title: "title",
                    description: "description",
                    userId: 1,
                }
            });
            console.log(response);
        }
        catch (error) {
            console.log(`there was ${error}`);
        }
    });
}
function getTodoAndUsers(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield prisma.todo.findMany({
                where: {
                    userId: userId,
                },
                select: {
                    id: true,
                    title: true,
                    description: true,
                    author: true,
                }
            });
            console.log(response);
        }
        catch (error) {
            console.log(`${error} occured `);
        }
    });
}
// insertUser("username1", "username1", "username1", "username1", "u1@gmail.com");
getTodoAndUsers(1);
