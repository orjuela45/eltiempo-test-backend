import { Model, ModelCtor } from 'sequelize-typescript'
import createHttpError from 'http-errors'
import { Attributes } from 'sequelize'
import {
  CommonGetOneByPkInterface,
  CommonParamsToFindInterface,
  PaginationInterface,
} from '../interfaces'

export class CommonRepository<T extends Model> {
  public model: ModelCtor<T>

  constructor(model: ModelCtor<T>) {
    this.model = model
  }

  async getOneByPK(params: CommonGetOneByPkInterface<T>): Promise<T> {
    const { include, attributes, subQuery } = params
    const { id } = params
    const result = await this.model.findByPk(id, {
      include,
      attributes: attributes as Attributes<T>,
      subQuery,
    })
    if (!result)
      throw createHttpError.NotFound(
        params.customMessage ?? 'Recurso no encontrado'
      )
    return result
  }

  async getOneByFilters(params: CommonParamsToFindInterface<T>): Promise<T> {
    const { where, customMessage, include, attributes, subQuery } = params
    const result = await this.model.findOne({
      where,
      include,
      attributes: attributes as Attributes<T>,
      subQuery,
    })
    if (!result)
      throw createHttpError.NotFound(customMessage ?? 'Recurso no encontrado')
    return result
  }

  async getAll(params: CommonParamsToFindInterface<T>, pagination?: PaginationInterface): Promise<T[]> {
    const { where, customMessage, include, attributes, subQuery } = params
    const result = await this.model.findAll({
      where,
      include,
      attributes: attributes as Attributes<T>,
      subQuery,
      ...pagination
    })
    if (!result)
      throw createHttpError.NotFound(customMessage ?? 'Recursos no encontrado')
    return result
  }
}
