import { Injectable } from "@decorators/di"

@Injectable()
export class User {
    constructor(_name:string) {this.name = _name}
    name:string
}