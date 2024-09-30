import { Model, ModelCtor } from "sequelize-typescript";
import createHttpError from 'http-errors'
import { WhereOptions } from "sequelize";
import { CommonGetOneByPkInterface, CommonParamsToFindInterface } from "../interfaces";

export class CommonRepository<T extends Model> {
  public model: ModelCtor<T>

  constructor(model: ModelCtor<T>) {
    this.model = model
  }

  async getOneByPK(params: CommonGetOneByPkInterface<T>): Promise<T> {
    const { id } = params
    const result = await this.model.findByPk(id)
    if (!result) throw createHttpError.NotFound(params.customMessage ?? 'Recurso no encontrado')
    return result
  }
  

  async getOneByFilters(params: CommonParamsToFindInterface<T>): Promise<T> {
    const { where, customMessage } = params
    const result = await this.model.findOne({ where })
    if (!result) throw createHttpError.NotFound(customMessage ?? 'Recurso no encontrado')
    return result
  }

  async getAll(params: CommonParamsToFindInterface<T>): Promise<T[]> {
    const { where, customMessage } = params
    const result = await this.model.findAll({ where })
    if (!result) throw createHttpError.NotFound(customMessage ?? 'Recursos no encontrado')
    return result
  }
}