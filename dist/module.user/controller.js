"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAUser = exports.deleteAUser = exports.updateAUser = exports.getAllUsers = exports.getAUser = void 0;
const services_1 = require("./services");
const createAUser = async (req, res) => {
    //create a new user
    const user = await (0, services_1.createUser)(req.body);
    res.send({
        message: "User created successfully",
        user,
    });
};
exports.createAUser = createAUser;
const getAUser = async (req, res) => {
    res.send("Hello from user controller");
};
exports.getAUser = getAUser;
const getAllUsers = async (req, res) => {
    res.send("Hello from user controller");
};
exports.getAllUsers = getAllUsers;
const updateAUser = async (req, res) => {
    res.send("Hello from user controller");
};
exports.updateAUser = updateAUser;
const deleteAUser = async (req, res) => {
    res.send("Hello from user controller");
};
exports.deleteAUser = deleteAUser;
