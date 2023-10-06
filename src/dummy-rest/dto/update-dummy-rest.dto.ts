import { PartialType } from '@nestjs/mapped-types';
import { CreateDummyRestDto } from './create-dummy-rest.dto';

export class UpdateDummyRestDto extends PartialType(CreateDummyRestDto) {}
