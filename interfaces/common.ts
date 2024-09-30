import { Attributes, IncludeOptions, WhereOptions } from "sequelize"
import { Model } from "sequelize-typescript"

export interface CommonParamsToFindInterface<T extends Model> {
  attributes?: (keyof T)[]
  include?: IncludeOptions[]
  where?: WhereOptions<Attributes<T>>
  customMessage?: string
  subQuery?: boolean
}

export interface CommonGetOneByPkInterface<T extends Model>
  extends CommonParamsToFindInterface<T> {
  id: number
}