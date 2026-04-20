import axios from "axios";

// All requests go to this base URL
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// GET /api/products
export const getAllProducts = () => API.get("/products");

// GET /api/products/:id
export const getProductById = (id) => API.get(`/products/${id}`);

// POST /api/products
export const createProduct = (productData) =>
  API.post("/products", productData);

// PUT /api/products/:id
export const updateProduct = (id, productData) =>
  API.put(`/products/${id}`, productData);

// DELETE /api/products/:id
export const deleteProduct = (id) => API.delete(`/products/${id}`);
