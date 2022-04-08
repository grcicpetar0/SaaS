import { Field, ObjectType } from 'type-graphql'

import { CategoryGroup } from './CategoryGroup'
import { UpdateCategoryGroupErrors } from './UpdateCategoryGroupErrors'

@ObjectType()
export class UpdateCategoryGroupResponse {
  @Field(type => CategoryGroup, { nullable: true })
  result?: CategoryGroup

  @Field(type => UpdateCategoryGroupErrors, { nullable: true })
  errors?: UpdateCategoryGroupErrors
}
