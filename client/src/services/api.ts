import axios from "axios";
import { Product } from "../components/dataStructures";

const uri = "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: uri,
});

export const getProducts: () => Promise<Product[]> = async () => {
  const res = await axiosInstance.get("/products/");
  console.log(res.data);
  return res.data;
};
