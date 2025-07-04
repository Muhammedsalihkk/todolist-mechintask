"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserControler_1 = require("../Controler/UserControler");
const router = express_1.default.Router();
router.post('/user/register', UserControler_1.userRegister);
router.post('/user/login', UserControler_1.userLogin);
// router.post('todo/')
exports.default = router;
