import { MongooseError, ObjectId } from "mongoose";
import ProductModel from "../models/product.model";
import { ApiError } from "../utils/ApiError";

export const AddProduct = async (
  data: {
    title: string;
    category: string;
    description?: string;
    price: number;
  },
  userId: {},
  imageUrl: string
) => {
  return await ProductModel.create({
    title: data.title,
    image: imageUrl,
    category: data.category,
    description: data.description,
    price: data.price,
    createdBy: userId,
  });
};

export const updateProduct = async (
  data: {
    title: string;
    category: string;
    description?: string;
    price: number;
  },
  productId: ObjectId,
  imageUrl: string
) => {
  try {
    const producutUpdateResult = await ProductModel.findByIdAndUpdate(
      productId,
      {
        title: data.title,
        image: imageUrl,
        category: data.category,
        description: data.description,
        price: data.price,
      },
      {
        new: true,
      }
    );

    if (!producutUpdateResult) {
      throw ApiError.internal("Update product failed");
    }
    return producutUpdateResult;
  } catch (error) {
    if (error instanceof MongooseError) {
      console.error(error);
    } else {
      console.error(error);
    }
  }
};

export const deleteProduct = async (productId: {}) => {
  return await ProductModel.findByIdAndDelete(productId);
};

export const fetchProduct = async (productId: {}) => {
  return await ProductModel.findOne(productId);
};

export const fetchAllProduct = async () => {
  return await ProductModel.find();
};

export const fetchProductByCategory = async (category: string) => {
  return await ProductModel.find({ category });
};
