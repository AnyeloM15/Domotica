import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CommonModule } from "./common/common.module";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClimaModule } from "./clima/clima.module";
import { ControlModule } from "./control/control.module";
import { AlertasModule } from "./alertas/alertas.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || ""),
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),

    CommonModule,
    AuthModule,
    ClimaModule,
    ControlModule,
    AlertasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
