"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const path = require("path");
const { connectDB } = require('./config/db');
app.use(body_parser_1.default.urlencoded({ extended: true }));
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8001;
connectDB();
app.get('/', (req, res) => {
    res.send("<h1>Create your new APP</h1>");
});
app.listen(PORT, () => {
    console.log(`listening at  http://localhost:${PORT}`);
});

