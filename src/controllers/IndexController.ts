import { Controller, Get, Response, Request } from "@decorators/express";
import { User } from "../core/entities/user.entity";
import { BaseController } from "./BaseController";
import { UserService } from "../services/user.service";
import { Injectable } from "@decorators/di";

@Injectable()
@Controller('/')
export class IndexController extends BaseController{
    
    constructor(private service:UserService) { 
        super() 
    }

    @Get('/')
    async GetAll(@Response() response:any){
        this._response = response
        this.ProcessResponse<User[]>(await this.service.GetAll())
    }
}