"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config({
    path: "./config.env",
});
const app_1 = require("./app");
const local_db = process.env.DATABASE_LOCAL || "";
mongoose_1.default
    .connect(process.env.NODE_ENV === "development" ? local_db : local_db, {})
    .then((con) => {
    console.log("DB connection successful", con.connection.host);
});
const PORT = process.env.PORT || 3000;
app_1.app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
