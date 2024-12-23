"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
exports.router = router;
router.route("/").get(controller_1.getAllUsers).post(controller_1.createAUser);
router.route("/:id").get(controller_1.getAUser).put(controller_1.updateAUser).delete(controller_1.deleteAUser);
