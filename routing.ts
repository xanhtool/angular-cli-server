import * as express from 'express'
import * as path from 'path'

export default class Routing {

  router:any = express.Router()

  constructor(){
    this.api() // Set our api routes
    this.other() // Catch all other routes and return the index file
  }


  api() {
    this.router.get('/api',(req,res) =>{
      res.send('api works')
    })
  }

  other(){
    this.router.get('*',(req,res) =>{
      res.sendFile(path.join(__dirname,'../index.html'))
    })
  }

  run() {
    return this.router
  }

}
