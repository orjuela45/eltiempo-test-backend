import { Model } from "sequelize-typescript";
import { CommonRepository } from "../repositories";
import { NextFunction, Request, Response } from "express";

export class CommonController<T extends Model, R extends CommonRepository<T>> {
  public repository: R

  constructor(repository: R) {
    this.repository = repository;
  }

  getOneByPK = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params
      const result = await this.repository.getOneByPK({id: Number(id)});
      res.json(result);
    } catch (error) {
      next(error)
    }
  }

  getOneByFilters = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { filters } = req.body
      const result = await this.repository.getOneByFilters(filters);
      res.json(result);      
    } catch (error) {
      next(error)
    }
  }

  getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { filters } = req.body
      const result = await this.repository.getAll({where: filters});
      res.json(result);
    } catch (error) {
      next(error)
    }
  }

}