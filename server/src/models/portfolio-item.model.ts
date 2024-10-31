import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PortfolioItemDocument = PortfolioItem & Document;

@Schema()
export class PortfolioItem {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  clientSiteUrl: string;

  @Prop({ default: true })
  isVisible: boolean;
}

export const PortfolioItemSchema = SchemaFactory.createForClass(PortfolioItem);
