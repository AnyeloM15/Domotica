import { Controller, Get, Post, Body } from "@nestjs/common";
import { ClimaService } from "./clima.service";
import { CreateClimaDto } from "./dto/create-clima.dto";

@Controller("clima")
export class ClimaController {
  constructor(private readonly climaService: ClimaService) {}

  @Post()
  create(@Body() data: CreateClimaDto) {
    return this.climaService.create(data);
  }

  @Get("ultima")
  findLast() {
    return this.climaService.findLast();
  }

  @Get("historial")
  findAll() {
    return this.climaService.findAll();
  }
}
