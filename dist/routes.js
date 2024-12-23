"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./module.user/routes");
const router = express_1.default.Router();
exports.router = router;
router.use("/user", routes_1.router);
