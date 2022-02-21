import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "../users/users.module";

import { AuthenticationController } from "./authentication.controller";

import { AuthenticationService } from "./authentication.service";
import { PrismaService } from "src/prisma.service";

import { jwtConstants } from "./models/constants.model";

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      inject: [],
      useFactory: () => {
        return {
          secret: jwtConstants.secret,
          signOptions: {
            expiresIn: "8h",
          },
        };
      },
    }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, PrismaService],
})
export class AuthenticationModule {}
