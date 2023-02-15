import { Injectable } from '@nestjs/common';
import {PrismaClient} from "@prisma/client";
import {User} from "../@generated/user";
@Injectable()
export class UsersService {


    getUsers() {
        const prism = new PrismaClient();
        const users  = Array<User>();
        prism.user.findMany().then((data) => {
            users.push(...data);
        });
        return users;
    }
}
