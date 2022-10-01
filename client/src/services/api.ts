import axios from "axios";
import { Product } from "../dataStructures";

const uri = "http://localhost:5000";

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
