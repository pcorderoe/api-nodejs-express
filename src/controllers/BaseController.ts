import { Response } from "@decorators/express";

export abstract class BaseController {
    constructor() { }
    ProcessResponse<T>(@Response() res:any, result:any){
        res.send(result)
    }
}