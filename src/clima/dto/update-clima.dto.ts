import { PartialType } from '@nestjs/swagger';
import { CreateClimaDto } from './create-clima.dto';

export class UpdateClimaDto extends PartialType(CreateClimaDto) {}
