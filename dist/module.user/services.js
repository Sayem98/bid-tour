"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const User_1 = require("./models/User");
const createUser = async (data) => {
    //create a new user
    const user = new User_1.User(data);
    //save the user
    await user.save();
    return user;
};
exports.createUser = createUser;
