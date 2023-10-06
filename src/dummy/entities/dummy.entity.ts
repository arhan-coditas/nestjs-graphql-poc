import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Dummy {
  @Field(() => String, { description: 'Example field (placeholder)' })
  exampleField: string;
}
