import express from 'express'
import config from './config/app'
import { RegisterControllers } from './controllers/index';

const { api } = config

const App = (env:string) => {
    let a = require('dotenv-json-complex')({environment:env})
    let { instance } = JSON.parse(process.env.config || '{}') 
    if(!api) console.error(`\n(${new Date()}) Error: Application Error | Config is not available\n`)
    else{
        let h = `=${Array(instance?.name?.length).fill('=').join('')}=`
        console.info(`\n${h}\n ${instance?.name} \n${h}\n\nInitializing....\n\nStarting Time: ${new Date()}\nVersion: ${api.version}-${api.stage}\nAuthor: ${api.author}\nEnvironment: ${env}`)
    
    
        const _server = express()
    
        try {
            RegisterControllers(_server)
            _server.listen(instance?.port || 8000, () => console.info(`\nInstance running: ${instance?.url || 'http://localhost'}:${instance?.port || 8000}`))
        } catch (error) {
            console.error(error)
        }
    }
}

export default App

