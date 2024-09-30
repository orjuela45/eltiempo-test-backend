import express from 'express'
import cors from 'cors'
import createHttpError from 'http-errors';
import { sequelize } from './'
import routes from '../routes'
import { errorHandler } from '../middlewares'

export class Server {
  private app: express.Application
  private port: number

  constructor() {
    this.app = express()
    this.port = Number(process.env.PORT) || 8080

    this.middlewares()
    this.routes()
    this.databaseConnection()
    this.app.use(errorHandler)
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

  routes() {
    this.app.use('/api', routes)
    this.app.use((req, res, next) => {
      next(createHttpError(404, 'Ruta no encontrada'));
    });
  }

}
