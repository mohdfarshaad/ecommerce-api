import { Document, ObjectId } from "mongoose";

export interface IProduct extends Document {
  title: string;
  category: string;
  image: string;
  description: string;
  price: number;
  createdBy: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
