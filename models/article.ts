import { AutoIncrement, BelongsTo, Column, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { ArticleInterface, AuthorInterface, ContentInterface } from "../interfaces";
import { Author, Content } from "./";

@Table({
  tableName: "Article",
})
export class Article extends Model<ArticleInterface>{
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  title!: string

  @Column
  image!: string

  @Column
  section!: string

  @Column
  @ForeignKey(() => Author)
  authorId!: number

  @BelongsTo(() => Author)
  author?: AuthorInterface

  @HasMany(() => Content)
  contents!: ContentInterface[]
}