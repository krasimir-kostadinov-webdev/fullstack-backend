import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  fintAll(): string {
    return 'returns all cats';
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return 'creates a cat';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `A cat with id ${id}`;
  }
}
