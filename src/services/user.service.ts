import { Injectable } from "@decorators/di";
import { User } from "../core/entities/user.entity";
import { IUserService } from "../core/services/iuser.service";

@Injectable()
export class UserService implements IUserService{
    constructor() {}
    GetAll(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            resolve([{name:'pat'}])
            reject([])
        })
    }

}