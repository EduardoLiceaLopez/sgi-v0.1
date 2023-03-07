import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersAccessDto } from './create-users_access.dto';

export class UpdateUsersAccessDto extends PartialType(CreateUsersAccessDto) {}
