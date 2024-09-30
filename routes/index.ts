import { Router } from 'express'
import CommonRouter from './common'
import { CommonController } from '../controllers'
import { Article, Author, Content } from '../models'
import { CommonRepository } from '../repositories'

const router = Router()

router.use('/article', CommonRouter(new CommonController(new CommonRepository(Article))))
router.use('/content', CommonRouter(new CommonController(new CommonRepository(Content))))
router.use('/author', CommonRouter(new CommonController(new CommonRepository(Author))))

export default router