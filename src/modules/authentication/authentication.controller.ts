import { Body, Controller, Post, Res } from "@nestjs/common";
import { AppController } from "src/app.controller";

import { AuthenticationService } from "./authentication.service";

import { LoginDto } from "./dto/login.dto";

import { Response } from "express";

@Controller("auth")
export class AuthenticationController extends AppController {
  constructor(private readonly authenticationService: AuthenticationService) {
    super();
  }

  @Post("login")
  async login(@Body() req: LoginDto, @Res() res: Response) {
    try {
      const validation = await this.authenticationService.validateUser(
        req.email.toString(),
        req.password.toString()
      );
      const response = await this.authenticationService.generateJwt(validation);
      return this.responseOK(response, res);
    } catch (error) {
      return this.responseWithErrors(res);
    }
  }
}
