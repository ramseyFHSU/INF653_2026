import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../services/productService";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Sending request...");
        const res = await getAllProducts();
        console.log("Response received:", res.data);
        setProducts(res.data);
      } catch (err) {
        console.log("Request failed:", err);
        setError("Could not load products. Is your backend running?");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
            {products.length} item{products.length !== 1 ? "s" : ""} in the
            catalog
          </p>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">📦</div>
          <p>No products yet. Add one to get started!</p>
        </div>
      ) : (
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
                    className={`product-card-stock ${product.stock > 0 ? "in-stock" : ""}`}
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
      )}
    </div>
  );
}

export default HomePage;
