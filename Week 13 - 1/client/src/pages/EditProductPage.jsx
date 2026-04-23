import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { getProductById, updateProduct } from "../services/productService";

function EditProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setInitialData(res.data.product);
        setFetching(false);
      })
      .catch(() => {
        setError("Could not load product data.");
        setFetching(false);
      });
  }, [id]);

  function handleSubmit(formData) {
    setLoading(true);
    setError(null);

    updateProduct(id, formData)
      .then(() => {
        setSuccess(true);
        setLoading(false);
        setTimeout(() => navigate(`/products/${id}`), 1200);
      })
      .catch(() => {
        setError("Failed to update product. Please try again.");
        setLoading(false);
      });
  }

  if (fetching) {
    return (
      <div className="page-wrapper">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading product data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <Link to={`/products/${id}`} className="back-link">
        ← Back to product
      </Link>

      <div className="page-header fade-in">
        <div>
          <h1 className="page-title">Edit Product</h1>
          <p className="page-subtitle">
            Update the fields below and save your changes
          </p>
        </div>
      </div>

      <div className="form-card fade-in">
        {error && <div className="alert alert-error">{error}</div>}
        {success && (
          <div className="alert alert-success">
            Product updated! Redirecting...
          </div>
        )}

        <ProductForm
          initialData={initialData}
          onSubmit={handleSubmit}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default EditProductPage;
