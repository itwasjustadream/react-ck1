function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <button 
        className="add-to-cart" 
        onClick={() => onAddToCart(product)}
      >
        В корзину
      </button>
    </div>
  );
}

export default ProductCard;