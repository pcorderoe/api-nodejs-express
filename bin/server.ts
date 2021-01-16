import { attachControllers } from '@decorators/express'
import express from 'express'
import { IndexController } from './../src/controllers/IndexController';
import cfg from '../src/config/app'

const { server } = cfg

const _server = express()

attachControllers(_server, [IndexController])

_server.listen(server.port, () => console.log(`⚡️[server]: Server is running at https://localhost:${server.port}`))