"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("./config/app"));
const index_1 = require("./controllers/index");
const { api } = app_1.default;
const App = (env) => {
    var _a;
    let a = require('dotenv-json-complex')({ environment: env });
    let { instance } = JSON.parse(process.env.config || '{}');
    if (!api)
        console.error(`\n(${new Date()}) Error: Application Error | Config is not available\n`);
    else {
        let h = `=${Array((_a = instance === null || instance === void 0 ? void 0 : instance.name) === null || _a === void 0 ? void 0 : _a.length).fill('=').join('')}=`;
        console.info(`\n${h}\n ${instance === null || instance === void 0 ? void 0 : instance.name} \n${h}\n\nInitializing....\n\nStarting Time: ${new Date()}\nVersion: ${api.version}-${api.stage}\nAuthor: ${api.author}\nEnvironment: ${env}`);
        const _server = express_1.default();
        try {
            index_1.RegisterControllers(_server);
            _server.listen((instance === null || instance === void 0 ? void 0 : instance.port) || 8000, () => console.info(`\nInstance running: ${(instance === null || instance === void 0 ? void 0 : instance.url) || 'http://localhost'}:${(instance === null || instance === void 0 ? void 0 : instance.port) || 8000}`));
        }
        catch (error) {
            console.error(error);
        }
    }
};
exports.default = App;
