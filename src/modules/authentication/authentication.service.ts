import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  // validate user exists
  async validateUser(email: string, password: string) {
    const user = await this.usersService.findUserByEmail(email);
    if (user) {
      const isMatch = await bcrypt.compareSync(
        password,
        user.password.toString()
      );
      if (isMatch) {
        const { password, ...res } = user;
        return res;
      }
      return null;
    }
  }

  // generate JWT with JwtService
  async generateJwt(user: any) {
    const payload = await { email: user.email, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }

  //
}
