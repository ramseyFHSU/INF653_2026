import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getProductById, deleteProduct } from "../services/productService";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Product not found or server error.");
        setLoading(false);
      });
  }, [id]);

  function handleDelete() {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;
    setDeleting(true);
    deleteProduct(id)
      .then(() => navigate("/"))
      .catch(() => {
        setError("Failed to delete product.");
        setDeleting(false);
      });
  }

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading product...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-wrapper">
        <div className="alert alert-error">{error}</div>
        <Link to="/" className="back-link">
          ← Back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <Link to="/" className="back-link">
        ← Back to products
      </Link>

      <div className="detail-card fade-in">
        <span className="detail-category-tag">{product.category}</span>
        <h1 className="detail-name">{product.name}</h1>
        <p className="detail-description">{product.description}</p>

        <div className="detail-meta-grid">
          <div className="detail-meta-item">
            <div className="detail-meta-label">Price</div>
            <div className="detail-meta-value">
              ${Number(product.price).toFixed(2)}
            </div>
          </div>
          <div className="detail-meta-item">
            <div className="detail-meta-label">Stock</div>
            <div className="detail-meta-value">{product.stock} units</div>
          </div>
        </div>

        <div className="detail-actions">
          <Link to={`/products/${id}/edit`} className="btn btn-secondary">
            ✏️ Edit
          </Link>
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="btn btn-danger"
          >
            {deleting ? "Deleting..." : "🗑 Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
