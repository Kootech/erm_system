import axios from "axios";
import { Product, UserLogin } from "../dataStructures";

const uri = "http://localhost:5000";

export const axiosAPI = axios.create({
  baseURL: uri,
});

const axiosInstance = axios.create({
  baseURL: uri,
});

export const getProducts: () => Promise<Product[]> = async () => {
  const res = await axiosInstance.get("/products/");
  console.log(res.data);
  return res.data;
};

export const getSold: () => Promise<Product[]> = async () => {
  const res = await axiosInstance.get("/sold/");
  console.log(res.data);
  return res.data;
};

export const loginUser = async (data: UserLogin) => {
  const res = await axiosInstance.post("/user/login/");
  return res.data;
};
