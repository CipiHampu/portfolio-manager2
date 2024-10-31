import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';  
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PortfolioController } from './controllers/portfolio.controller';
import { PortfolioItem, PortfolioItemSchema } from './models/portfolio-item.model';
import { PortfolioService } from './services/portfolio.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/portfolio_db'), 
    MongooseModule.forFeature([{ name: PortfolioItem.name, schema: PortfolioItemSchema }]),
  ],
  controllers: [AppController, PortfolioController],
  providers: [AppService, PortfolioService],
})
export class AppModule {}
