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
const users_1 = __importDefault(require("../models/users"));
const userRouter = express_1.default.Router();
userRouter.get('/users', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield users_1.default.find({});
    try {
        response.send(users);
    }
    catch (error) {
        response.status(500).send(error);
    }
}));
userRouter.post('/user', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new users_1.default(request.body);
    try {
        yield user.save();
        response.send(user);
    }
    catch (error) {
        response.status(500).send(error);
    }
}));
exports.default = userRouter;
