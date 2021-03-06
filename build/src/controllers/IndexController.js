"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexController = void 0;
const express_1 = require("@decorators/express");
const BaseController_1 = require("./BaseController");
const user_service_1 = require("../services/user.service");
const di_1 = require("@decorators/di");
let IndexController = class IndexController extends BaseController_1.BaseController {
    constructor(service) {
        super();
        this.service = service;
    }
    GetAll(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.ProcessResponse(res, yield this.service.GetAll());
        });
    }
};
__decorate([
    express_1.Get('/'),
    __param(0, express_1.Response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IndexController.prototype, "GetAll", null);
IndexController = __decorate([
    di_1.Injectable(),
    express_1.Controller('/'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], IndexController);
exports.IndexController = IndexController;
