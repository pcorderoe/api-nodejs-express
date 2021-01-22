import { Response } from "@decorators/express";

export abstract class BaseController {
    _response:any
    constructor() {}
    ProcessResponse<T>(result:any){
        this._response?.send(result)
    }
}