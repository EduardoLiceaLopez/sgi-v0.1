import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersTypeDto } from './create-users_type.dto';

export class UpdateUsersTypeDto extends PartialType(CreateUsersTypeDto) {}
