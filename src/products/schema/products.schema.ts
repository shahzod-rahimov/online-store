import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductsDocument = HydratedDocument<Products>;

@Schema()
export class Products {
  @Prop()
  model: string;

  @Prop()
  product_name: string;

  @Prop()
  color: string;

  @Prop()
  price: number;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);