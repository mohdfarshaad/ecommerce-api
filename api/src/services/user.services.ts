
import { User } from "../models/user.model";
import { getUserParams, ICreateUser } from "../types/user";

export const createUser = async (userData: ICreateUser) => {
  return await User.create({
    name: userData.name,
    email: userData.email,
    password: userData.password,
  });
};

export const updateUserProfile = async () => {};

export const updateUserEmail = async () => {};
export const updateUserPassword = async () => {};

export const deleteUser = async (userId: string) => {
  return await User.findByIdAndDelete(userId);
};

export const getUser = async (params: getUserParams) => {
  const query: any = {};
  if (params.userId) query._id = params.userId;
  if (params.email) query.email = params.email;
  return await User.findOne(query).select("-password -refreshToken");
};

export const getAllUser = async () => {
  return await User.find().select("-password -refreshToken");
};

