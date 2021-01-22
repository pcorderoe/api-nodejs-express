import { attachControllers } from '@decorators/express';
import { IndexController } from './IndexController';

export const RegisterControllers = (server:any) => {
    attachControllers(server, [
        IndexController
    ])
}