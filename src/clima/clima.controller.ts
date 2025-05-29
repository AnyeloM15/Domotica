import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClimaService } from './clima.service';
import { CreateClimaDto } from './dto/create-clima.dto';
import { UpdateClimaDto } from './dto/update-clima.dto';

@Controller('clima')
export class ClimaController {
  constructor(private readonly climaService: ClimaService) {}

  @Post()
  create(@Body() createClimaDto: CreateClimaDto) {
    return this.climaService.create(createClimaDto);
  }

  @Get()
  findAll() {
    return this.climaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.climaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClimaDto: UpdateClimaDto) {
    return this.climaService.update(+id, updateClimaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.climaService.remove(+id);
  }
}
