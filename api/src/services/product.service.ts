import ProductModel from "../models/product.model";

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
  productId: {},
  imageUrl: string
) => {
  return await ProductModel.findByIdAndUpdate(productId, {
    title: data.title,
    image: imageUrl,
    category: data.category,
    description: data.description,
    price: data.price,
  });
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
