"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 3000;
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send("Learning TypeScript + Express");
});
app.get('/hi', (req, res) => {
    res.send("Hi Route");
});
app.post('/', (req, res) => {
    res.json({ "Message": "Receieved" });
});
app.listen(PORT, () => {
    console.log("Learning TypeScirpt + Express");
});
