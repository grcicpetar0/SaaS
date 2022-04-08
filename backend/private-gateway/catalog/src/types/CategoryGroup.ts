import { Field, ObjectType } from 'type-graphql'

import { Category } from './Category'

@ObjectType()
export class CategoryGroup {
  @Field()
  id: string

  @Field()
  name: string

  @Field(type => [Category])
  children: Category[]
}
