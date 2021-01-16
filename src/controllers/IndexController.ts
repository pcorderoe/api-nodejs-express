import { Controller, Get, Response } from "@decorators/express";
import { User } from "../core/entities/user.entity";
import { BaseController } from "./BaseController";
import { IUserService } from './../core/services/iuser.service';
import { UserService } from "../services/user.service";
import { Injectable } from "@decorators/di";

@Injectable()
@Controller('/')
export class IndexController extends BaseController{
    constructor(private service:UserService) { 
        super() 
    }

    @Get('/')
    async GetAll(@Response() res:any){
        this.ProcessResponse<User[]>(res, await this.service.GetAll())
    }
}