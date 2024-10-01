import { CommonGetOneByPkInterface, CommonParamsToFindInterface, PaginationInterface } from "../interfaces";
import { Article, Author, Content } from "../models";
import { CommonRepository } from "./common";

export class ArticleRepository extends CommonRepository<Article> {

  constructor() { 
    super(Article)
  }

  async getOneByPK(params: CommonGetOneByPkInterface<Article>): Promise<Article> {
    const { id, customMessage } = params
    return await super.getOneByPK({ 
      id, 
      customMessage,
      include: [ 
        {model: Author},
        {model: Content, order: [['order', 'ASC']]}
       ]
    })
  }

  async getOneByFilters(params: CommonParamsToFindInterface<Article>): Promise<Article> {
    const { where, customMessage } = params
    return await super.getOneByFilters({
      where,
      customMessage,
      include: [
        {model: Author},
        {model: Content, order: [['order', 'ASC']]}
      ]
    })
  }

  async getAll(params: CommonParamsToFindInterface<Article>, pagination?: PaginationInterface): Promise<Article[]> {
    const { where, customMessage } = params
    return await super.getAll({
      where,
      customMessage,
      include: [
        {model: Author},
      ]
    }, pagination)
  }
}