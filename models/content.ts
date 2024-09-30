import { AutoIncrement, Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { ContentInterface } from "../interfaces";
import { Article } from "./article";

@Table({
  tableName: "Content"
})
export class Content extends Model<ContentInterface>{
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  type!: string

  @Column
  content!: string 

  @Column
  order!: number 

  @Column
  @ForeignKey(() => Article)
  articleId!: number
}
