import express from 'express'
import cors from 'cors'
import { sequelize } from './'

export class Server {
  private app: express.Application
  private port: number

  constructor() {
    this.app = express()
    this.port = Number(process.env.PORT) || 8080

    this.middlewares()
    this.databaseConnection()
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

  databaseConnection() {
    sequelize.authenticate().then(() => {
      console.log('Connection has been established successfully.')
    }).catch((error) => {
      console.error('Unable to connect to the database:', error)
    })
  }

}
