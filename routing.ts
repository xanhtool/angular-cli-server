import * as express from 'express'
import * as path from 'path'

export default class Routing {
  

  constructor(){
  }


  api() {
    let router:any = express.Router()
    router.get('/',(req,res) =>{
      res.send('api works')
    })
    return router
  }

  other(){
    let router:any = express.Router()
    router.get('*',(req,res) =>{
      res.sendFile(path.join(__dirname,'../index.html'))
    })
    return router
  }

}
