import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Clima as ClimaEntity } from "./entities/clima.entity";

export type ClimamaDocument = ClimaEntity & Document;

@Schema()
export class Clima {
  @Prop({ required: true })
  temperatura: number;

  @Prop({ required: true })
  humedad: number;

  @Prop({ required: true })
  ubicacion: string;

  @Prop({ default: Date.now })
  timestamp: Date;
}

export const ClimaSchema = SchemaFactory.createForClass(Clima);
