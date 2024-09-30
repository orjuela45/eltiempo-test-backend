import express from 'express'
import cors from 'cors'

export class Server {
  private app: express.Application
  private port: number

  constructor(testMode: boolean = false) {
    this.app = express()
    this.port = Number(process.env.PORT) || 8080

    this.middlewares()
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`)
    })
  }

  middlewares() {
    this.app.use(express.static('public'))
    this.app.use(cors())
    this.app.use(express.json())
  }

}
