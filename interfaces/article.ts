import { AuthorInterface, ContentInterface } from "./"

export interface ArticleInterface {
  id?: number
  title: string
  image: string
  contents: ContentInterface[],
  section: string
  authorId: number
  author?: AuthorInterface
  createdAt?: Date
  updatedAt?: Date
}