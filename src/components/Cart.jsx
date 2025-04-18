function Cart({ cart, total, onClose, onRemove, onUpdateQuantity }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Корзина</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        {cart.length === 0 ? (
          <div className="empty-cart">Корзина пуста</div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p>${item.price} x {item.quantity}</p>
                  </div>
                  <div className="cart-item-controls">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
                    />
                    <button 
                      className="remove-button"
                      onClick={() => onRemove(item.id)}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-total">
              <strong>Итого: ${total}</strong>
            </div>
            
            <button className="checkout-button">Оформить заказ</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;