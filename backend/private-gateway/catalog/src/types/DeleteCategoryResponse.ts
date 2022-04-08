import { Field, ObjectType } from 'type-graphql'

import { DeleteCategoryErrors } from './DeleteCategoryErrors'

@ObjectType()
export class DeleteCategoryResponse {
  @Field(type => DeleteCategoryErrors, { nullable: true })
  errors?: DeleteCategoryErrors
}
