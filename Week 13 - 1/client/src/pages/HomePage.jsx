import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../services/productService";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("createdAt");
  const [order, setOrder] = useState("desc");
  const [page, setPage] = useState(1);
  const [limit] = useState(6);

  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    setLoading(true);

    getAllProducts({
      search,
      category,
      sort,
      order,
      page,
      limit,
    })
      .then((res) => {
        setProducts(res.data.products);
        setTotalPages(res.data.totalPages);
        setTotalProducts(res.data.totalProducts);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load products. Is your backend running?");
        setLoading(false);
      });
  }, [search, category, sort, order, page, limit]);

  function handleSearchChange(e) {
    setSearch(e.target.value);
    setPage(1);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
    setPage(1);
  }

  function handleSortChange(e) {
    setSort(e.target.value);
    setPage(1);
  }

  function handleOrderChange(e) {
    setOrder(e.target.value);
    setPage(1);
  }

  function clearFilters() {
    setSearch("");
    setCategory("");
    setSort("createdAt");
    setOrder("desc");
    setPage(1);
  }

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-wrapper">
        <div className="alert alert-error">{error}</div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="page-header fade-in">
        <div>
          <h1 className="page-title">All Products</h1>
          <p className="page-subtitle">
            {totalProducts} item{totalProducts !== 1 ? "s" : ""} in the catalog
          </p>
        </div>
        <Link to="/products/add" className="btn btn-primary">
          + Add Product
        </Link>
      </div>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={handleSearchChange}
          className="filter-input"
        />

        <input
          type="text"
          placeholder="Filter by category..."
          value={category}
          onChange={handleCategoryChange}
          className="filter-input"
        />

        <select
          value={sort}
          onChange={handleSortChange}
          className="filter-select"
        >
          <option value="createdAt">Newest</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
          <option value="category">Category</option>
        </select>

        <select
          value={order}
          onChange={handleOrderChange}
          className="filter-select"
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>

        <button onClick={clearFilters} className="btn btn-secondary">
          Clear
        </button>
      </div>

      {products.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">📦</div>
          <p>No matching products found.</p>
        </div>
      ) : (
        <>
          <div className="product-grid">
            {products.map((product) => (
              <Link
                to={`/products/${product._id}`}
                key={product._id}
                style={{ textDecoration: "none" }}
              >
                <div className="card product-card">
                  <span className="product-card-category">
                    {product.category}
                  </span>
                  <h2 className="product-card-name">{product.name}</h2>
                  <p className="product-card-description">
                    {product.description}
                  </p>
                  <div className="product-card-footer">
                    <span className="product-card-price">
                      ${Number(product.price).toFixed(2)}
                    </span>
                    <span
                      className={`product-card-stock ${
                        product.stock > 0 ? "in-stock" : ""
                      }`}
                    >
                      {product.stock > 0
                        ? `${product.stock} in stock`
                        : "Out of stock"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="pagination-bar">
            <button
              className="btn btn-secondary"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              Previous
            </button>

            <span className="page-count">
              Page {page} of {totalPages}
            </span>

            <button
              className="btn btn-secondary"
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
