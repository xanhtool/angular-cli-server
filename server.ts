// Get dependencies
import * as express from 'express'
import * as path from 'path'
import * as http from 'http'
import * as bodyParser from 'body-parser'

import Routing from './routing'

export default class Server {
  app:any;
  routing;

  constructor() {
    this.app = express();
    this.routing = new Routing(); // Get our API routes
  }

  configureApp() {
    this.app.set('port', (process.env.PORT || 3000)); // Get port from environment and store in Express.
    this.app.use(bodyParser.json()) // Parsers for POST data
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(express.static(path.join(__dirname, '../'))) // Point static path to dist
    this.app.use('/',this.routing.run())
  }

  configureCORS() {
    this.app.use( (req,res,next) => {
      res.setHeader('Access-Control-Allow-Origin','*')
      res.setHeader('Access-Control-Allow-Methods','POST,GET,PUT,DELETE,PATCH')
      res.setHeader('Access-Control-Allow-Headers','Content-Type, Access-Control-Allow-Headers, Authrization, X-Requested-With, Token')
      // res.setHeader('Cache-Control','no-cahe'); // disable caching for alway refesh content
      next();
    })
  }


  listen(port) {
    this.app.listen(port, () => {
      console.log(`Magic happened on port ${port}`)
    })
  }

  run() {
    this.configureApp()
    this.configureCORS()
    this.listen(this.app.get('port'))
  }

}
