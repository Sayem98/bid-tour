"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
const mongoose_1 = require("mongoose");
const ProviderSchema = new mongoose_1.Schema({
    userId: { type: String, required: true, unique: true },
    locations: [
        {
            lat: { type: Number, required: true },
            lng: { type: Number, required: true },
            spotId: { type: String, required: true },
        },
    ],
});
const Provider = (0, mongoose_1.model)("Provider", ProviderSchema);
exports.Provider = Provider;
