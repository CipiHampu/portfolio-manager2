import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PortfolioItem, PortfolioItemDocument } from '../models/portfolio-item.model';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectModel(PortfolioItem.name) private portfolioModel: Model<PortfolioItemDocument>,
  ) {}

  async create(portfolioItem: PortfolioItem): Promise<PortfolioItem> {
    const newItem = new this.portfolioModel(portfolioItem);
    return newItem.save();
  }

  async findAll(): Promise<PortfolioItem[]> {
    return this.portfolioModel.find().exec();
  }

  async update(id: string, portfolioItem: PortfolioItem): Promise<PortfolioItem> {
    return this.portfolioModel.findByIdAndUpdate(id, portfolioItem, { new: true });
  }

  async remove(id: string): Promise<PortfolioItem> {
    return this.portfolioModel.findByIdAndDelete(id).exec();
  }
}
