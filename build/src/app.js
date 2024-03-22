"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
async function bootstrap() {
    app.get("/", (req, res) => {
        const message = "Hello, welcome to your User development API";
        res.status(200).json({
            status: "success",
            message,
        });
    });
    // app.use(router);
    const PORT = process.env.PORT;
    app.listen("5000", () => {
        console.log(`App running on http://localhost:${PORT}`);
    });
}
bootstrap().catch((err) => {
    throw err;
});
