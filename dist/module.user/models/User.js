"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true },
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: {
        city: { type: String, required: true },
        street: { type: String, required: true },
        zip: { type: String, required: true },
    },
    photo: { type: String },
    role: { type: String, default: "user" },
});
const User = (0, mongoose_1.model)("User", UserSchema);
exports.User = User;
