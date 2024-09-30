import { AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { ArticleInterface, AuthorInterface } from "../interfaces";
import { Article } from "./";

@Table({
  tableName: "Author",
})
export class Author extends Model<AuthorInterface>{
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  name!: string

  @Column
  lastName!: string
  
  @Column
  dateOfBirth!: Date

  @Column
  email!: string

  @HasMany(() => Article)
  articles?: ArticleInterface[]
}
