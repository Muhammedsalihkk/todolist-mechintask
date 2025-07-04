"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.userRegister = void 0;
const userRegister = (req, res) => {
    const data = req.body.name;
    console.log(data);
    res.status(200).json({ message: "heelo thissi me" });
};
exports.userRegister = userRegister;
const userLogin = (req, res) => {
    const data = req.body;
};
exports.userLogin = userLogin;
