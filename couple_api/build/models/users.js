"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// const mongoose = require('mongoose')
//change it later
const customValidateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};
const { Schema } = mongoose_1.default;
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate: [customValidateEmail, 'invalid email'],
    },
    createdAt: { type: Date, default: Date.now },
    lastLogin: { type: Date },
});
const userModel = mongoose_1.default.model('users', userSchema);
exports.default = userModel;
