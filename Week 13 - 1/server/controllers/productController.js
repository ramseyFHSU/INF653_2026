const Product = require("../models/Product");
const asyncHandler = require("../utils/asyncHandler");

// Create a product
// POST /api/products

const createProduct = asyncHandler(async (req, res) => {
  const { name, price, category, stock, description } = req.body;

  if (
    name === undefined ||
    price === undefined ||
    category === undefined ||
    stock === undefined
  ) {
    res.status(400);
    throw new Error("Name, price, category, and stock are required");
  }

  const product = await Product.create({
    name,
    price,
    category,
    stock,
    description,
  });

  res.status(201).json({
    success: true,
    message: "Product created successfully",
    product,
  });
});

// Get all products with search, filter, sort, pagination
// GET /api/products

const getProducts = asyncHandler(async (req, res) => {
  const {
    search = "",
    category,
    minPrice,
    maxPrice,
    minStock,
    maxStock,
    sort = "createdAt",
    order = "desc",
    page = 1,
    limit = 6,
  } = req.query;

  const queryObject = {};

  if (search) {
    queryObject.name = { $regex: search, $options: "i" };
  }

  if (category) {
    queryObject.category = { $regex: `^${category}$`, $options: "i" };
  }

  if (minPrice || maxPrice) {
    queryObject.price = {};
    if (minPrice) queryObject.price.$gte = Number(minPrice);
    if (maxPrice) queryObject.price.$lte = Number(maxPrice);
  }

  if (minStock || maxStock) {
    queryObject.stock = {};
    if (minStock) queryObject.stock.$gte = Number(minStock);
    if (maxStock) queryObject.stock.$lte = Number(maxStock);
  }

  const allowedSortFields = [
    "name",
    "price",
    "stock",
    "category",
    "createdAt",
    "updatedAt",
  ];
  const sortField = allowedSortFields.includes(sort) ? sort : "createdAt";
  const sortOrder = order === "asc" ? 1 : -1;

  const currentPage = Math.max(Number(page), 1);
  const perPage = Math.max(Number(limit), 1);
  const skip = (currentPage - 1) * perPage;

  const totalProducts = await Product.countDocuments(queryObject);

  const products = await Product.find(queryObject)
    .sort({ [sortField]: sortOrder })
    .skip(skip)
    .limit(perPage);

  res.status(200).json({
    success: true,
    count: products.length,
    totalProducts,
    currentPage,
    totalPages: Math.ceil(totalProducts / perPage),
    products,
  });
});

// Get single product by ID
// GET /api/products/:id

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Update product
// PUT /api/products/:id

const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    },
  );

  res.status(200).json({
    success: true,
    message: "Product updated successfully",
    product: updatedProduct,
  });
});

// Delete product
// DELETE /api/products/:id

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
