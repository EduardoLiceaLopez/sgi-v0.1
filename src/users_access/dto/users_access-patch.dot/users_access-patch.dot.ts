import { PartialType } from "@nestjs/mapped-types";
import { UsersAccessDot } from "../users_access.dot/users_access.dot";

export class UsersAccessPatchDot extends PartialType(UsersAccessDot){}
