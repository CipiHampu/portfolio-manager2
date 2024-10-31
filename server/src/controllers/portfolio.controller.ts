import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PortfolioService } from '../services/portfolio.service';
import { PortfolioItem } from '../models/portfolio-item.model';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Post()
  async create(@Body() portfolioItem: PortfolioItem) {
    return this.portfolioService.create(portfolioItem);
  }

  @Get()
  async findAll() {
    return this.portfolioService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() portfolioItem: PortfolioItem) {
    return this.portfolioService.update(id, portfolioItem);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.portfolioService.remove(id);
  }
}
