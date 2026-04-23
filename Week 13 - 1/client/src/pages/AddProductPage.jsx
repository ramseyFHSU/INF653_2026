import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { createProduct } from "../services/productService";

function AddProductPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleSubmit(formData) {
    setLoading(true);
    setError(null);
    createProduct(formData)
      .then(() => navigate("/"))
      .catch(() => {
        setError("Failed to create product. Please try again.");
        setLoading(false);
      });
  }

  return (
    <div className="page-wrapper">
      <Link to="/" className="back-link">
        ← Back to products
      </Link>

      <div className="page-header fade-in">
        <div>
          <h1 className="page-title">Add Product</h1>
          <p className="page-subtitle">
            Fill in the details below to add a new item
          </p>
        </div>
      </div>

      <div className="form-card fade-in">
        {error && <div className="alert alert-error">{error}</div>}
        <ProductForm onSubmit={handleSubmit} loading={loading} />
      </div>
    </div>
  );
}

export default AddProductPage;
