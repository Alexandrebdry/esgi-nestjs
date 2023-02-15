import {Controller, Get} from '@nestjs/common';
import {UsersService} from "./users.service";
import {User} from "../@generated/user";

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService,
    ) {}

    @Get()
    getUsers(): User[] | null {
        return this.usersService.getUsers();
    }

}
