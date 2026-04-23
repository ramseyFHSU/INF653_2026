import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getAllProducts = (params = {}) => API.get("/products", { params });

export const getProductById = (id) => API.get(`/products/${id}`);

export const createProduct = (productData) =>
  API.post("/products", productData);

export const updateProduct = (id, productData) =>
  API.put(`/products/${id}`, productData);

export const deleteProduct = (id) => API.delete(`/products/${id}`);
