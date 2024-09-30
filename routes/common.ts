import { Router } from "express"
import { CommonController } from "../controllers"
import { CommonRepository } from "../repositories"
import { Model } from "sequelize-typescript"

const CommonRouter = <T extends Model, R extends CommonRepository<T>>(
  controller: CommonController<T, R>,
) => {
  const router = Router()


  router.get('/:id', controller.getOneByPK.bind(controller))

  router.get('/', controller.getAll.bind(controller))

  router.post('/findOne', controller.getOneByFilters.bind(controller))

  return router
}

export default CommonRouter