"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterControllers = void 0;
const express_1 = require("@decorators/express");
const IndexController_1 = require("./IndexController");
const RegisterControllers = (server) => {
    express_1.attachControllers(server, [
        IndexController_1.IndexController
    ]);
};
exports.RegisterControllers = RegisterControllers;
