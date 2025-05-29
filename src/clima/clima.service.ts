import { Injectable } from "@nestjs/common";
import { CreateClimaDto } from "./dto/create-clima.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Document } from "mongoose";
import { Clima } from "./entities/clima.entity";

export type ClimaDocument = Clima & Document;

@Injectable()
export class ClimaService {
  constructor(
    @InjectModel(Clima.name) private ClimaModel: Model<ClimaDocument>
  ) {}

  async create(createClimaDto: CreateClimaDto): Promise<Clima> {
    // Agregar timestamp explícito
    const climaConTimestamp = {
      ...createClimaDto,
      timestamp: new Date(),
    };

    const created = new this.ClimaModel(climaConTimestamp);
    const resultado = await created.save();

    if (createClimaDto.temperatura > 30) {
      console.warn("Temperatura alta detectada");
    }
    if (createClimaDto.temperatura < 0) {
      console.warn("Temperatura baja detectada");
    }

    return resultado;
  }
  async findAll(): Promise<Clima[]> {
    return this.ClimaModel.find().sort({ timestamp: -1 }).limit(100).exec();
  }

  async findLast(): Promise<Clima> {
    return this.ClimaModel.findOne().sort({ timestamp: -1 }).exec();
  }
}
