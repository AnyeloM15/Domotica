import { Injectable } from '@nestjs/common';
import { CreateClimaDto } from './dto/create-clima.dto';
import { UpdateClimaDto } from './dto/update-clima.dto';

@Injectable()
export class ClimaService {
  create(createClimaDto: CreateClimaDto) {
    return 'This action adds a new clima';
  }

  findAll() {
    return `This action returns all clima`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clima`;
  }

  update(id: number, updateClimaDto: UpdateClimaDto) {
    return `This action updates a #${id} clima`;
  }

  remove(id: number) {
    return `This action removes a #${id} clima`;
  }
}
