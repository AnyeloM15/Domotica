import { Module } from "@nestjs/common";
import { ClimaService } from "./clima.service";
import { ClimaController } from "./clima.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { ClimaSchema } from "./clima.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Clima", schema: ClimaSchema }]),
  ],
  controllers: [ClimaController],
  providers: [ClimaService],
})
export class ClimaModule {}
