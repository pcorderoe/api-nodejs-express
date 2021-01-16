import { Injectable } from "@decorators/di";
import { User } from "../entities/user.entity";

export interface IUserService{
    GetAll():Promise<User[]>
}