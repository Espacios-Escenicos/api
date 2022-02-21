import { Injectable } from "@nestjs/common";

import { CreateUserDto } from "./dto/create-user.dto";

import { PrismaService } from "src/prisma.service";

import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * create users
   */
  async createUsers(request: CreateUserDto) {
    request.password = await bcrypt.hash(request.password, 15);
    const user = await this.prisma.users.create({ data: request });
    return user;
  }

  /**
   * Find user by email
   */
  async findUserByEmail(email: string) {
    const user = await this.prisma.users.findUnique({ 
      where: { email: email },
    });
    return user;
  }
}
