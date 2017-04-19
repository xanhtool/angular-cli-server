import * as express from 'express'
import * as path from 'path'

export default class Routing {
  router:any = express.Router()

  constructor(){
    // this.api()
    // this.other()
  }


  api() {
    this.router.get('/',(req,res) =>{
      res.send('api works')
    })
    return this.router
  }

  other(){
    this.router.get('*',(req,res) =>{
      res.sendFile(path.join(__dirname,'../index.html'))
    })
    return this.router
  }

  // run() {
  //   return this.router
  // }

}
