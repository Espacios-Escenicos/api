import { Body, Controller, Get, Param, Post, Res, UseGuards } from "@nestjs/common";
import { AppController } from "src/app.controller";

import { CreateUserDto } from "./dto/create-user.dto";

import { UsersService } from "./users.service";
import { PrismaService } from "src/prisma.service";

import { Response } from "express";
import { JwtAuthGuard } from "../authentication/guards/jwt-auth.guard";
import { Public } from "../authentication/decorators/public.decorator";

@UseGuards(JwtAuthGuard)
@Controller("users")
export class UsersController extends AppController {
  constructor(
    private readonly usersService: UsersService,
    private readonly prismaService: PrismaService
  ) {
    super();
  }

  /**
   * Create Users
   * @param request
   * @param res
   * @returns
   */
  @Public()
  @Post()
  async createUsers(@Body() request: CreateUserDto, @Res() res: Response) {
    try {
      const user = await this.usersService.createUsers(request);
      return this.responseOK(user, res);
    } catch (error) {
      console.log(error);
      return this.responseWithErrors(res);
    }
  }
}
